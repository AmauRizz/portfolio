// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-12-07',

    devtools: {
        enabled: true
    },

    runtimeConfig: {
        targetEmail: process.env.NUXT_TARGET_EMAIL,
        emailPass: process.env.NUXT_EMAIL_PASS,
    },

    modules: [
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxt/fonts',
      '@nuxt/hints',
      'shadcn-nuxt'
    ],

    css: [
        '~/assets/css/main.css'
    ],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    image: {
        quality: 80,
        format: ['avif', 'webp'],
    },

    fonts: {
        families: [
            {
                name: 'Poppins',
                provider: 'google',
                weights: [300, 400, 500, 600, 700]
            }
        ]
    }
})