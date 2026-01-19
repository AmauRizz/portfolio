import type { Skill } from "~/types/skill";

export interface Project {
    isFeatured: boolean

    name: string

    shortDescription: string
    longDescription: string

    gallery: string[]
    image: string
    category: ProjectCategories
    stack: Skill[]

    githubLink: string
    projectLink?: string
}

export enum ProjectCategories {
    WEBSITE,
    APPLICATION,
    GAME,
    SERVICE
}