import type { Skill } from '@/types/skill'

export const skillItems: Skill[] = [
    {
        icon: "mdi:symfony",
        name: "Symfony",
        description: "Framework PHP pour créer des applications web robustes et modulaires.",
        usage: "Utilisé pour des backends, API sécurisées et projets orientés métier.",
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
        usage: "Création de SPA et interfaces réactives pour applications web.",
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
        description: "Framework basé sur Vue.js pour le SSR, SSG et le développement full-stack.",
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
        description: "ORM moderne pour TypeScript et Node.js, simplifie la gestion de la base de données.",
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
        usage: "Création rapide d'API REST et de middleware serveur.",
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
        icon: "devicon:postgresql",
        name: "PostgreSQL",
        description: "Système de gestion de base de données relationnelle puissant et fiable.",
        usage: "Bases de données relationnelles avec transactions et requêtes complexes.",
        skills: [
            "SQL avancé",
            "Indexation",
            "Optimisation des performances"
        ],
        link: "https://www.postgresql.org/"
    },
    {
        icon: "devicon:mysql",
        name: "MySQL",
        description: "Base de données relationnelle populaire et performante pour applications web.",
        usage: "Applications web nécessitant une base de données relationnelle stable.",
        skills: [
            "SQL standard",
            "Joins et relations",
            "Optimisation des requêtes"
        ],
        link: "https://www.mysql.com/"
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
        icon: "devicon:vscode",
        name: "VS Code",
        description: "Éditeur de code léger et extensible pour développer efficacement.",
        usage: "Édition de code, debugging et intégration avec extensions.",
        skills: [
            "Extensions et plugins",
            "Debugging",
            "Intégration Git"
        ],
        link: "https://code.visualstudio.com/"
    },
    {
        icon: "devicon:jetbrains",
        name: "JetBrains",
        description: "Suite d’IDE puissants pour différents langages et technologies.",
        usage: "Développement avancé avec assistance intelligente et outils intégrés.",
        skills: [
            "IntelliJ IDEA",
            "WebStorm",
            "Refactoring et debugging"
        ],
        link: "https://www.jetbrains.com/"
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
