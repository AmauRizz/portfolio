import type { Project } from "~/types/project";
import { projectItems } from "~/contents/projects";

export function getProjectsByIsFeatured(featured: boolean): Project[] {
    const projects = projectItems.filter(p => p.isFeatured === featured);

    if (projects.length === 0) {
        throw new Error(
            `No ${featured ? "featured" : "non-featured"} projects found`
        );
    }

    return projects;
}