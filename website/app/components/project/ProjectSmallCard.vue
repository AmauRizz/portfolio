<script setup lang="ts">
import { type Project, ProjectCategories } from "@/types/project";

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="border-2 border-slate-800 rounded-xl px-6 py-6
              bg-linear-to-br from-[#111727] to-[#0A0F1C]">
    <p>{{ project.name }}</p>
  </article>
</template>