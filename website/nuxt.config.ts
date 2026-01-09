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
    },

    app: {
        head: {
            htmlAttrs: { lang: 'fr' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'author', content: 'Amaury Mulcey' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Amaury Mulcey' },
                { property: 'og:locale', content: 'fr_FR' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'shortcut icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' }
            ]
        }
    }

})