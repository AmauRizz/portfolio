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
         bg-linear-to-br from-[#111727] to-[#0A0F1C]"
  >
    <div class="relative aspect-16/10 overflow-hidden rounded-lg">
      <NuxtImg
          :src="project.image"
          alt="Project preview"
          class="w-full h-full object-cover
             transition-transform duration-700
             group-hover:scale-105"
      />

      <div class="absolute inset-0 bg-gradient-to-r
                from-[#0A0F1C]/90 via-[#0A0F1C]/40 to-transparent"
      />

      <div class="absolute inset-y-0 left-0 w-3/5 p-5 flex flex-col justify-end">
        <div class="z-10 group-hover:hidden">
          <span class="text-xs uppercase tracking-widest text-[#00FF7F] mb-1">{{ project.category }}</span>
          <h3 class="font-bold text-lg mb-1">{{ project.name }}</h3>
          <p class="text-sm text-[#8DA0BA] line-clamp-2">{{ project.shortDescription }}</p>
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
           bg-[#0A0F1C]/95 border-l-6 rounded-l-2xl border-[#00FF7F]
           transform translate-x-[calc(100%-3rem)]
           group-hover:translate-x-0
           transition-transform duration-500 ease-out"
    >
      <div
          class="absolute left-0 inset-y-0 w-12
             flex items-center justify-center
             text-[#00FF7F]
             group-hover:opacity-0
             transition-opacity duration-300"
      >
        <Icon name="solar:arrow-right-linear" class="text-xl" />
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
                <p class="text-xs uppercase tracking-widest text-[#00FF7F] mb-1">
                  {{ project.category }}
                </p>

                <h3 class="font-bold text-lg mb-1">
                  {{ project.name }}
                </h3>
              </div>

              <div>
                <div class="flex flex-row gap-2">
                  <div class="inline-flex items-center gap-2
                       border-2 border-slate-800 bg-[#050816] rounded-xl
                       px-1 py-1
                       transition-all duration-200 ease-out">
                    <NuxtLink
                        :to="project.projectLink"
                        target="_blank"
                        class="inline-flex items-center gap-2
                      text-[#00FF7F] font-bold text-lg"
                    >
                      <Icon name="streamline-plump:web" />
                    </NuxtLink>
                  </div>

                  <div class="inline-flex items-center gap-2
                        border-2 border-slate-800 bg-[#050816] rounded-xl
                        px-1 py-1
                        transition-all duration-200 ease-out"
                  >
                    <NuxtLink
                        :to="project.githubLink"
                        target="_blank"
                        class="inline-flex items-center gap-2
                        text-[#00FF7F] font-bold text-lg"
                    >
                      <Icon name="mdi:github" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-sm text-[#8DA0BA] mb-4 leading-relaxed">
              {{ project.longDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>