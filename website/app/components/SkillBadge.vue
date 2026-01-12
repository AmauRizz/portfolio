<script setup lang="ts">
defineProps<{
  skillName: string
  skillIcon: string
}>()
</script>

<template>
  <button
      type="button"
      @click="console.log('test')"
      class="cursor-pointer inline-flex items-center gap-2
           border-2 border-slate-800 bg-[#050816] rounded-xl
           px-3 sm:px-4 md:px-5 py-1.5
           transition-all duration-200 ease-out
            hover:border-[#00FF7F] hover:scale-105"
      aria-haspopup="dialog"
  >
    <icon :name="skillIcon" :class="'text-2xl'" />
    <span>{{ skillName }}</span>
  </button>
</template>
