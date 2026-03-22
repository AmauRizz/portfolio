import type { Skill } from '@/types/skill'

export const skillItems: Skill[] = [
    {
        icon: "mdi:symfony",
        name: "Symfony",
        description: "Framework PHP pour créer des applications web robustes et modulaires.",
        usage: "Utilisé pour des backends, des API sécurisées et des projets orientés métier.",
        skills: [
            "Doctrine ORM",
            "Sécurité",
            "Architecture MVC"
        ],
        link: "https://symfony.com/"
    },
    {
        icon: "material-icon-theme:vue",
        name: "Vue.js",
        description: "Framework JavaScript progressif pour construire des interfaces utilisateur réactives.",
        usage: "Création de SPA et d'interfaces réactives pour applications web.",
        skills: [
            "Composition API",
            "Directives",
            "Routing"
        ],
        link: "https://vuejs.org/"
    },
    {
        icon: "material-icon-theme:nuxt",
        name: "Nuxt.js",
        description: "Framework basé sur Vue.js pour le SSR, le SSG et le développement full-stack.",
        usage: "Développement full-stack avec rendu côté serveur et génération statique.",
        skills: [
            "SSR & SSG",
            "Modules Nuxt",
            "Pinia"
        ],
        link: "https://nuxt.com/"
    },
    {
        icon: "devicon:nextjs",
        name: "Next.js",
        description: "Framework React pour le rendu côté serveur et les sites web performants.",
        usage: "Applications React performantes avec SSR, SSG et API routes.",
        skills: [
            "SSR et SSG",
            "API Routes",
            "Shadcn/ui"
        ],
        link: "https://nextjs.org/"
    },
    {
        icon: "devicon:tailwindcss",
        name: "TailwindCSS",
        description: "Framework CSS utilitaire pour créer des interfaces modernes rapidement.",
        usage: "Styling rapide et responsive d'interfaces web modernes.",
        skills: [
            "Classes utilitaires",
            "Responsive design",
            "Mobile first"
        ],
        link: "https://tailwindcss.com/"
    },
    {
        icon: "file-icons:prisma",
        name: "Prisma",
        description: "ORM moderne pour TypeScript et Node.js, simplifiant la gestion de la base de données.",
        usage: "Gestion de la base de données avec typage fort et migrations automatisées.",
        skills: [
            "Modélisation de données",
            "Migrations",
            "Client TypeScript"
        ],
        link: "https://www.prisma.io/"
    },
    {
        icon: "devicon:nodejs",
        name: "Node.js",
        description: "Environnement JavaScript côté serveur pour construire des applications web scalables.",
        usage: "Serveurs web, API et applications temps réel.",
        skills: [
            "Event Loop",
            "Modules Node",
            "Gestion des packages npm"
        ],
        link: "https://nodejs.org/"
    },
    {
        icon: "simple-icons:express",
        name: "Express.js",
        description: "Framework minimaliste Node.js pour créer des API et des serveurs web.",
        usage: "Création rapide d'API REST et de middlewares serveur.",
        skills: [
            "Routing",
            "Middleware",
            "Gestion des requêtes et réponses"
        ],
        link: "https://expressjs.com/"
    },
    {
        icon: "material-icon-theme:nest",
        name: "Nest.js",
        description: "Framework Node.js progressif pour construire des applications serveur structurées.",
        usage: "Développement d'applications backend modulaires avec TypeScript.",
        skills: [
            "Modules et Providers",
            "Controllers et Services",
            "Intégration avec TypeORM/Prisma"
        ],
        link: "https://nestjs.com/"
    },
    {
        icon: "material-icon-theme:minecraft-fabric",
        name: "Fabric",
        description: "Framework modding léger pour Minecraft, permettant de créer et gérer des mods personnalisés.",
        usage: "Développement de mods Minecraft avec intégration facile et compatibilité étendue.",
        skills: [
            "Création de mods",
            "API Fabric",
            "Gestion des versions Minecraft"
        ],
        link: "https://fabricmc.net/"
    },
    {
        icon: "devicon:java",
        name: "JavaFX",
        description: "Framework Java pour créer des interfaces graphiques riches et interactives sur desktop.",
        usage: "Développement d'applications desktop avec interfaces graphiques avancées et animations.",
        skills: [
            "Création d'interfaces GUI",
            "Gestion des événements",
            "Layouts et composants JavaFX"
        ],
        link: "https://openjfx.io/"
    },
    {
        icon: "devicon:mysql",
        name: "SQL",
        description: "Langage standard de gestion et d’interrogation de bases de données relationnelles, utilisé pour créer, manipuler et administrer des données structurées.",
        usage: "Conception de bases de données, requêtes, gestion des données, reporting et intégration dans des applications web, desktop ou mobiles.",
        skills: [
            "Requêtes SQL",
            "Modélisation de bases de données",
            "Jointures et sous-requêtes",
            "Indexation et optimisation des performances"
        ],
        link: "https://www.w3schools.com/sql/"
    },
    {
        icon: "material-icon-theme:git",
        name: "Git",
        description: "Système de contrôle de version distribué pour gérer le code source efficacement.",
        usage: "Gestion de versions, collaboration et déploiement continu.",
        skills: [
            "Branches et merges",
            "Rebase",
            "Gestion de conflits"
        ],
        link: "https://git-scm.com/"
    },
    {
        icon: "material-icon-theme:docker",
        name: "Docker",
        description: "Plateforme de conteneurisation pour déployer des applications de façon isolée.",
        usage: "Isolation d'applications, gestion d'environnements et déploiement simplifié.",
        skills: [
            "Dockerfile",
            "Compose",
            "Images et conteneurs"
        ],
        link: "https://www.docker.com/"
    },
    {
        icon: "material-icon-theme:figma",
        name: "Figma",
        description: "Outil de design UI/UX collaboratif pour créer des maquettes et prototypes.",
        usage: "Prototypage, design collaboratif et workflow UI/UX.",
        skills: [
            "Wireframes",
            "Prototypes interactifs",
            "Collaboration en temps réel"
        ],
        link: "https://www.figma.com/"
    }
]