import type { Skill } from '@/types/skill'
import type { Project } from '@/types/project'

export type ModalType = 'skill' | 'project'

export function useModal() {
    const activeModal = useState<ModalType | null>(
        'active-modal',
        () => null
    )

    const selectedSkill = useState<Skill | null>(
        'selected-skill',
        () => null
    )

    const selectedProject = useState<Project | null>(
        'selected-project',
        () => null
    )

    function closeModal() {
        activeModal.value = null
        selectedSkill.value = null
        selectedProject.value = null
    }

    function toggleModal<T extends Skill | Project>(
        type: ModalType,
        item: T | null
    ) {
        if (!item) {
            closeModal()
            return
        }

        if (
            activeModal.value === type &&
            ((type === 'skill' && selectedSkill.value?.name === item.name) ||
                (type === 'project' && selectedProject.value?.name === item.name))
        ) {
            closeModal()
            return
        }

        activeModal.value = type

        if (type === 'skill') {
            selectedSkill.value = item as Skill
            selectedProject.value = null
        } else {
            selectedProject.value = item as Project
            selectedSkill.value = null
        }
    }

    return {
        activeModal,
        selectedSkill,
        selectedProject,
        toggleModal,
        closeModal,
    }
}
