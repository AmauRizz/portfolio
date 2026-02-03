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
         bg-gradient-custom
         transition-all duration-700
         hover:-translate-y-2"
      :style="{ animationDelay: `${(parseInt(<string>$attrs['data-index']) || 0) * 0.1}s` }"
  >
    <div class="relative w-1/2 overflow-hidden">
      <NuxtImg
          :src="project.image"
          alt="Project preview"
          class="w-full h-full object-cover absolute inset-0
               transition-transform duration-1000
               group-hover:scale-115"
      />

      <div
          class="absolute inset-0 bg-linear-to-r
               from-(--bg-gradient-end)/95 via-(--bg-gradient-end)/50 to-transparent"
      />

      <div
          v-if="project.isFeatured"
          class="absolute top-4 left-4 z-10
               bg-brand-primary text-black
               inline-flex items-center gap-1
               rounded-full px-4 py-2
               text-xs font-bold shadow-lg"
      >
        <Icon name="solar:cup-star-bold" />
        En vedette
      </div>

      <div class="absolute bottom-0 left-0 p-6 z-10 max-w-md">
        <span class="text-xs uppercase tracking-widest text-brand-primary">
          {{ project.category }}
        </span>

        <h3 class="text-3xl font-extrabold tracking-tight mt-1 group-hover:text-brand-primary transition-colors duration-300">
          {{ project.name }}
        </h3>

        <p class="text-sm text-custom-secondary mt-2 line-clamp-2">
          {{ project.shortDescription }}
        </p>
      </div>
    </div>

    <div
        class="relative w-1/2
             bg-(--bg-gradient-end)/95
             border-l-6 border-brand-primary
             transition-all duration-700
             group-hover:-translate-x-4 group-hover:bg-(--bg-gradient-end)"
    >
      <div class="p-10 flex flex-col justify-between gap-6 min-h-[350px]">
        <div class="space-y-6">
          <div class="flex flex-wrap gap-2 max-w-lg">
            <SkillBadge
                v-for="(skill, index) in project.stack"
                :key="index"
                :skill="skill"
            />
          </div>

          <p class="text-sm text-custom-secondary leading-relaxed max-w-lg">
            {{ project.longDescription }}
          </p>
        </div>

        <div class="flex gap-4">
          <NuxtLink
              :to="project.projectLink"
              target="_blank"
              class="inline-flex items-center gap-2
                   border-2 border-slate-800 bg-dark-primary
                   rounded-xl px-6 py-3
                   text-brand-primary font-bold
                   transition-all duration-300
                   hover:border-brand-primary hover:bg-brand-primary
                   hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/25"
          >
            <Icon name="streamline-plump:web" class="text-2xl" />
            Live Demo
          </NuxtLink>

          <NuxtLink
              :to="project.githubLink"
              target="_blank"
              class="inline-flex items-center gap-2
                   border-2 border-slate-800 bg-dark-primary
                   rounded-xl px-6 py-3
                   text-brand-primary font-bold
                   transition-all duration-300
                   hover:border-brand-accent hover:bg-brand-accent
                   hover:scale-105 hover:shadow-lg hover:shadow-brand-accent/25"
          >
            <Icon name="mdi:github" class="text-2xl" />
            Code Source
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>