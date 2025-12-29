import { defineEventHandler, readBody, createError } from 'h3'
import { quotaService } from "../services/quota"
import { createMailer } from "../services/mailer"

const CONTACT_TEMPLATE = `<!doctype html>
<html lang="fr">
<head>
  <title>Reprosport17 Mailer</title>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #F8F8F8; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #F8F8F8; border: 1px solid #E0E0E0; border-radius: 8px; overflow: hidden; }
    .header { background-color: #1E1E1E; color: #FFFFFF; padding: 20px; text-align: center; box-shadow: 0 4px 8px rgba(44, 44, 44, 0.2); }
    .content { padding: 20px; }
    .field-label { font-weight: bold; margin-top: 10px; }
    .field-value { margin-bottom: 10px; }
    .message-box { background-color: #FFFFFF; border: 1px solid #E9ECEF; border-radius: 4px; padding: 15px; margin: 10px 0; }
    .footer { background-color: #1E1E1E; color: #FFFFFF; padding: 10px; text-align: center; font-size: 12px; box-shadow: 0 -4px 8px rgba(44, 44, 44, 0.2); }
    .link-site { color: #FFFFFF; }
    .link-site:hover { color: #FFD54F; }
    .link-email:hover, .link-phone:hover { color: #EFB30B; }
  </style>
</head>
<body>
  <section class="container">
    <div class="header">
      <h2>Nouveau message de contact</h2>
    </div>

    <div class="content">
      <p><span class="field-label">Nom :</span> <span class="field-value">{{name}}</span></p>
      <p><span class="field-label">Adresse à re-contacter :</span> <span class="field-value link-email">{{email}}</span></p>

      <p><span class="field-label">Message :</span></p>
      <div class="message-box">
        <p>{{message}}</p>
      </div>
    </div>

    <div class="footer">
      <p>Message reçu via le formulaire de contact de
        <a href="https://reprosport17.fr/contact" class="link-site">Reprosport17</a>
      </p>
    </div>
  </section>
</body>
</html>`

function escapeHtml(input: unknown) {
    return String(input ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function fillTemplate(template: string, vars: Record<string, string>) {
    // remplace toutes les occurrences de {{key}}
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? '')
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const body = await readBody(event)

    let ip = event.node.req.headers['x-forwarded-for']
    ip = Array.isArray(ip) ? ip[0] : ip
    ip = ip?.split(',')[0]?.trim() || event.node.req.socket.remoteAddress

    if (!ip) {
        throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
            data: { success: false, message: "L'utilisateur n'a pas d'adresse IP" }
        })
    }

    if (!body?.name || !body?.email) {
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            data: { success: false, message: "Champs obligatoire non présent" }
        })
    }

    const info = quotaService.getInfo(ip)
    if (info.isTimeout) {
        throw createError({
            statusCode: 429,
            statusMessage: "Too Many Requests",
            data: { success: false, message: "Trop de message" }
        })
    }
    const html = fillTemplate(CONTACT_TEMPLATE, {
        name: escapeHtml(body.name || 'Inconnu'),
        email: escapeHtml(body.email || 'Non fourni'),
        message: escapeHtml(body.message || 'Aucun message').replace(/\n/g, '<br/>'),
    })

    const transporter = createMailer()

    try {
        await transporter.sendMail({
            to: config.targetEmail,
            from: config.targetEmail,
            replyTo: body.email,
            subject: `[Contact] Demande de contact`,
            html,
        })

        quotaService.updateTimeout(ip)
        return { success: true, data: { message: "Email envoyé avec succès" } }
    } catch (err) {
        console.error(err)
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            data: { success: false, error: "Erreur interne du serveur" }
        })
    }
})