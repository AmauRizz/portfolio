import { skillItems } from '@/data/skills';
import type { Skill } from '@/types/skill';

export function getSkillByName(name: string): Skill {
    const skill = skillItems.find(
        skill => skill.name.toLowerCase() === name.toLowerCase()
    );

    if (!skill) {
        throw new Error(`Skill "${name}" not found`);
    }

    return skill;
}

