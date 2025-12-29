
import {defineEventHandler} from 'h3'
import { quotaService } from "../services/quota"

export default defineEventHandler(async (event) => {
    let ip = event.node.req.headers['x-forwarded-for']

    if (Array.isArray(ip)) {
        ip = ip[0]
    }

    if (!ip) throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
        data: {
            success: false,
            message: "L'utilisateur n'a pas d'adresse IP"
        }
    })

    const info = quotaService.getInfo(ip)
    return {
        success: true,
        data: {
            message: "Informations sur l'IP récuperé",
            content: info
        },
    }
})
