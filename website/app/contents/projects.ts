import { type Project, ProjectCategories } from '@/types/project'
import { getSkillByName } from "~/utils/skillUtils";

export const projectItems: Project[] = [
    {
        isFeatured: true,

        name: "Planifest",

        shortDescription: "Site internet ",
        longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        gallery: [

        ],
        image: "/assets/images/pdp.jpeg",
        category: ProjectCategories.WEBSITE,
        stack: [
            getSkillByName("Symfony"),
            getSkillByName("Vue.js"),
            getSkillByName("MySql"),
        ],

        githubLink: "https://github.com/AmauRizz/planifest",
        projectLink: "https://planifest.amaurymulcey.fr/"
    },
    {
        isFeatured: false,

        name: "KyDiGames",

        shortDescription: "Mod minecraft pour les serveurs en manque de fun",
        longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        gallery: [

        ],
        image: "/assets/images/pdp.jpeg",
        category: ProjectCategories.GAME,
        stack: [
            getSkillByName("Fabric")
        ],

        githubLink: "https://github.com/KyozuFR/KyDiGames"
    },
    {
        isFeatured: false,

        name: "LRU-Bot",

        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        gallery: [

        ],
        image: "/assets/images/pdp.jpeg",
        category: ProjectCategories.SERVICE,
        stack: [
            getSkillByName("Node.js"),
            getSkillByName("Sqlite"),
        ],

        githubLink: "https://github.com/KyozuFR/LRU-Bot"
    },
    {
        isFeatured: false,

        name: "ParkingLR",

        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        gallery: [

        ],
        image: "/assets/images/pdp.jpeg",
        category: ProjectCategories.APPLICATION,
        stack: [
            getSkillByName("JavaFX"),
        ],

        githubLink: "https://github.com/KyozuFR/ParkingLR",
    },
    {
        isFeatured: false,

        name: "Omni-Chat",

        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        gallery: [

        ],
        image: "/assets/images/pdp.jpeg",
        category: ProjectCategories.WEBSITE,
        stack: [
            getSkillByName("Express.js"),
            getSkillByName("Nest.js"),
            getSkillByName("PostgreSQL"),
        ],

        githubLink: "https://github.com/KyozuFR/Omni-Chat"
    }
]