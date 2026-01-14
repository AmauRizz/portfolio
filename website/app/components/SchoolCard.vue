<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  icon: string
  name: string
  description: string
  entryYear: Date
  exitYear: Date
}>()

const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
]

const formatMonthYear = (date: Date) => {
  return `${months[date.getMonth()]} ${date.getFullYear()}`
}

const exitDisplay = computed(() => {
  const today = new Date()
  if (
      props.exitYear.getDay() === today.getDay() &&
      props.exitYear.getFullYear() === today.getFullYear() &&
      props.exitYear.getMonth() === today.getMonth()
  ) {
    return 'Actuellement'
  }
  return formatMonthYear(props.exitYear)
})
</script>

<template>
  <div class="rounded-xl border-2 border-slate-800 bg-[#050816]  p-4 text-center sm:text-left transition-all duration-200 ease-out hover:scale-102">
    <div class="flex flex-col items-center sm:items-start sm:flex-row gap-4">
      <NuxtImg :src="icon" class="w-12 h-12 object-cover rounded-full" />

      <div class="mb-2">
        <h4 class="font-bold text-gray-100 text-lg">{{ name }}</h4>
        <p class="text-sm text-gray-400">
          {{ formatMonthYear(entryYear) }} - {{ exitDisplay }}
        </p>
      </div>
    </div>

    <p class="text-gray-100">{{ description }}</p>
  </div>
</template>
