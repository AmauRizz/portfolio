<script setup lang="ts">
import type { Project } from "~/types/project"

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
      class="group relative flex flex-col overflow-hidden
         border-2 border-slate-800 rounded-xl
         bg-gradient-custom
         transition-all duration-500
         hover:-translate-y-1"
      :style="{ animationDelay: `${(parseInt(<string>$attrs['data-index']) || 0) * 0.1}s` }"
  >
    <div class="relative aspect-16/10 overflow-hidden rounded-lg">
      <NuxtImg
          :src="project.image"
          alt="Project preview"
          class="w-full h-full object-cover
             transition-transform duration-700
             group-hover:scale-110"
      />

      <div class="absolute inset-0 bg-linear-to-r
                from-(--bg-gradient-end)/95 via-(--bg-gradient-end)/50 to-transparent
                transition-opacity duration-300 group-hover:opacity-90"
      />

      <div class="absolute inset-y-0 left-0 w-3/5 p-5 flex flex-col justify-end">
        <div class="z-10 group-hover:hidden transition-opacity duration-300">
          <span class="text-xs uppercase tracking-widest text-brand-primary mb-1 font-bold">{{ project.category }}</span>
          <h3 class="font-bold text-lg mb-1 group-hover:text-brand-primary transition-colors duration-300">{{ project.name }}</h3>
          <p class="text-sm text-custom-secondary line-clamp-2">{{ project.shortDescription }}</p>
        </div>

        <div
            class="hidden group-hover:flex flex-wrap gap-2 mt-2 max-w-[calc(90%-1rem)]"
        >
          <SkillBadge
              v-for="(skill, index) in project.stack"
              :key="index"
              :skill="skill"
          />
        </div>
      </div>

    </div>

    <div
        class="absolute inset-y-0 right-0 w-3/5
           bg-(--bg-gradient-end)/95 border-l-6 rounded-l-2xl border-brand-primary
           transform translate-x-[calc(100%-3rem)]
           group-hover:translate-x-0
           transition-all duration-500 ease-out
           group-hover:shadow-[-10px_0_30px_rgba(0,255,127,0.3)]"
    >
      <div
          class="absolute left-0 inset-y-0 w-12
             flex items-center justify-center
             text-brand-primary
             group-hover:opacity-0 transition-opacity duration-300"
      >
        <Icon name="solar:arrow-right-linear" class="text-xl group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      <div
          class="p-6 pl-8 opacity-0
             group-hover:opacity-100
             transition-opacity duration-300 delay-150"
      >
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-4">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col">
                <p class="text-xs uppercase tracking-widest text-brand-primary mb-1">
                  {{ project.category }}
                </p>

                <h3 class="font-bold text-lg mb-1">
                  {{ project.name }}
                </h3>
              </div>

              <div>
                <div class="flex flex-row gap-2">
                  <NuxtLink
                      :to="project.projectLink"
                      target="_blank"
                      class="inline-flex items-center gap-2
                             border-2 border-slate-800 bg-dark-primary rounded-xl
                             px-2 py-2 text-brand-primary font-bold text-lg
                             transition-all duration-300
                             hover:scale-105"
                  >
                    <Icon name="streamline-plump:web" class="text-xl" />
                  </NuxtLink>

                  <NuxtLink
                      :to="project.githubLink"
                      target="_blank"
                      class="inline-flex items-center gap-2
                             border-2 border-slate-800 bg-dark-primary rounded-xl
                             px-2 py-2 text-brand-primary font-bold text-lg
                             transition-all duration-300
                             hover:scale-110"
                  >
                    <Icon name="mdi:github" class="text-xl" />
                  </NuxtLink>
                </div>
              </div>
            </div>

            <p class="text-sm text-custom-secondary mb-4 leading-relaxed">
              {{ project.longDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>