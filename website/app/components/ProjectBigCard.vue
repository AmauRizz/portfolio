<script setup lang="ts">
import type { Project } from "~/types/project"

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
      class="group relative flex overflow-hidden
           border-2 border-slate-800 rounded-2xl
           bg-linear-to-br from-[#111727] to-[#0A0F1C]"
  >
    <div class="relative w-2/5 aspect-16/10 overflow-hidden">
      <NuxtImg
          :src="project.image"
          alt="Project preview"
          class="w-full h-full object-cover
               transition-transform duration-700
               group-hover:scale-105"
      />

      <div
          class="absolute inset-0 bg-gradient-to-r
               from-[#0A0F1C]/90 via-[#0A0F1C]/40 to-transparent"
      />

      <div
          v-if="project.isFeatured"
          class="absolute top-3 left-3 bg-[#00FF7F] text-[#000000] inline-flex items-center gap-1 rounded-full px-2 py-1 shadow-lg"
      >
        <Icon name="solar:cup-star-bold" class="text-sm"/>
        <p class="text-xs font-semibold m-0">En vedette</p>
      </div>

      <div class="absolute bottom-0 left-0 p-6 z-10">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#00FF7F]">
            {{ project.category }}
          </span>
          <h3 class="text-2xl font-bold mt-1">
            {{ project.name }}
          </h3>
          <p class="text-sm text-[#8DA0BA] mt-2 max-w-sm line-clamp-2">
            {{ project.shortDescription }}
          </p>
        </div>
      </div>
    </div>

    <div
        class="relative w-3/5
             bg-[#0A0F1C]/95 border-l-6 rounded-l-2xl border-[#00FF7F]"
    >
      <div
          class="h-full p-8 pl-10
               flex flex-col justify-between"
      >
        <div class="space-y-5">
          <div class="flex flex-wrap gap-2 max-w-xl">
            <SkillBadge
                v-for="(skill, index) in project.stack"
                :key="index"
                :skill="skill"
            />
          </div>

          <p class="text-sm text-[#8DA0BA] leading-relaxed max-w-xl">
            {{ project.longDescription }}
          </p>
        </div>

        <div class="flex items-center justify-between pt-6">
          <div class="flex gap-3">
            <NuxtLink
                :to="project.projectLink"
                target="_blank"
                class="inline-flex items-center gap-2
                     border-2 border-slate-800 bg-[#050816]
                     rounded-xl px-3 py-2
                     text-[#00FF7F] font-semibold
                     transition hover:border-[#00FF7F]"
            >
              <Icon name="streamline-plump:web" />
              Live
            </NuxtLink>

            <NuxtLink
                :to="project.githubLink"
                target="_blank"
                class="inline-flex items-center gap-2
                     border-2 border-slate-800 bg-[#050816]
                     rounded-xl px-3 py-2
                     text-[#00FF7F] font-semibold
                     transition hover:border-[#00FF7F]"
            >
              <Icon name="mdi:github" />
              GitHub
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
