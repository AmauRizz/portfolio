import type { Service } from '@/types/service'
import { ServiceType, CallToActionType } from '@/types/service'

export const primaryServicesItems: Service[] = [
    {
        type: ServiceType.PRIMARY,
        icon: "mdi:art",
        label: "Site Vitrine",
        description: "Une présence en ligne professionnelle",
        priceText: "A partir de 350€ TTC",

        features: [
            {
                label: "Design sur-mesure."
            },
            {
                label: "Mobile first."
            },
            {
                label: "Réferencement optimisé."
            },
            {
                label: "Livraison rapide."
            }
        ],
        
        projects: [
            {
                label: "Reprosport17",
                image: "reprosport17.png",
                url: "reprosport17.fr"
            },
            {
                label: "Reprosport17",
                image: "reprosport17.png",
                url: "reprosport17.fr"
            },
            {
                label: "Reprosport17",
                image: "reprosport17.png",
                url: "reprosport17.fr"
            }
        ],

        badge: {
            icon: "iconoir:medal-1st",
            label: "Populaire",
        },

        cta: {
            type: CallToActionType.PRIMARY,
            label: "Démarrer"
        }
    }
]

export const secondaryServicesItems: Service[] = [
    {
        type: ServiceType.SECONDARY,
        icon: "mdi:code",
        label: "Sur-Mesure",
        description: "Applications web complexes avec des fonctionnalités avancées",
        priceText: "Sur devis",

        features: [
            {
                label: "Analyse poussée de vos besoins."
            },
            {
                label: "Base de données."
            },
            {
                label: "API personnalisée."
            },
            {
                label: "Tableau de bord."
            }
        ],

        cta: {
            type: CallToActionType.FALLBACK,
            label: "Discuter"
        }
    },
    {
        type: ServiceType.SECONDARY,
        icon: "heroicons:wrench-16-solid",
        label: "Maintenance",
        description: "Gardez votre site performant et sécurisé",
        priceText: "50/mois TTC",

        features: [
            {
                label: "Mise en production de votre application."
            },
            {
                label: "Sécurisation du serveur."
            },
            {
                label: "Modification visuel du projet."
            }
        ],

        cta: {
            type: CallToActionType.FALLBACK,
            label: "En savoir plus"
        }
    }
]