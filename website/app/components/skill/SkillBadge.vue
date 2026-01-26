<script setup lang="ts">
import type { Skill } from "~/types/skill";
import type {Project} from "~/types/project";

type ModalType = 'skill' | 'project'

type ModalCallback = (
    type: ModalType,
    item: Skill | Project | null
) => void

defineProps<{
  skill: Skill
  modalCallback: ModalCallback
}>()
</script>

<template>
  <button
      type="button"
      class="cursor-pointer inline-flex items-center gap-2
           border-2 border-slate-800 bg-[#050816] rounded-xl
           px-3 sm:px-4 md:px-5 py-1.5
           transition-all duration-200 ease-out
           hover:border-[#00FF7F] hover:scale-105 focus-visible:border-[#00FF7F] focus-visible:scale-105"
      aria-haspopup="dialog"
      @click="modalCallback('skill', skill)"
  >
    <icon :name="skill.icon" :class="'text-2xl'" />
    <span>{{ skill.name }}</span>
  </button>
</template>
