import nodemailer from "nodemailer"

export function createMailer() {
    const config = useRuntimeConfig()

    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.targetEmail,
            pass: config.emailPass
        }
    })
}