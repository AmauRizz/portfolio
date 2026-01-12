<script setup lang="ts">
const props = defineProps<{
  skillName: string
  skillIcon: string
}>()
</script>

<template>
  <button
      type="button"
      @click="console.log('test')"
      class="cursor-pointer inline-flex items-center gap-2
           border-2 border-slate-800 rounded-xl
           px-3 sm:px-4 md:px-5 py-1.5
           transition-colors duration-200 ease-out
           hover:bg-slate-800"
      aria-haspopup="dialog"
  >
    <icon :name="props.skillIcon" :class="'text-2xl'" />
    <span>{{ props.skillName }}</span>
  </button>
</template>
