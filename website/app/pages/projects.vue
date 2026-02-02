<script setup lang="ts">
import { projectItems } from '@/contents/projects';

function getProjectsByIsFeatured(isFeatured) {
  return projectItems.filter(project => project.isFeatured === isFeatured);
}
</script>

<template>
  <main class="bg-[#070A13] text-[#F3F7FB] pt-20 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 min-h-screen">
    <section class="mb-16">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
        <div class="space-y-4">
          <NuxtLink
              to="/"
              class="inline-flex items-center gap-2 text-brand-accent underline-offset-4 transition-all duration-200 ease-out hover:underline"
          >
            <Icon name="tabler:arrow-left" />
            <span>Retour à l'accueil</span>
          </NuxtLink>
          
          <div class="space-y-2">
            <h1 class="font-bold text-5xl lg:text-6xl bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Tous mes Projets
            </h1>
            <p class="text-[#8DA0BA] text-lg lg:text-xl max-w-2xl">
              Découvrez l'ensemble de mes réalisations, une collection de projets qui témoignent de mon évolution et de ma passion pour le développement.
            </p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <div class="text-center">
            <div class="text-3xl font-bold text-brand-primary">{{ projectItems.length }}</div>
            <div class="text-sm text-[#8DA0BA]">Projets</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-brand-accent">{{ projectItems.filter(p => p.isFeatured).length }}</div>
            <div class="text-sm text-[#8DA0BA]">En vedette</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-16">
      <div class="flex flex-col gap-12">
        <!-- Projets en vedette -->
        <div v-if="getProjectsByIsFeatured(true).length > 0" class="space-y-8">
          <div class="flex items-center gap-3">
            <Icon name="solar:cup-star-bold" class="text-2xl text-brand-primary" />
            <h2 class="text-2xl font-bold text-brand-primary">Projets en vedette</h2>
          </div>
          
          <div class="grid gap-8">
            <ProjectBigCard
                v-for="(project, index) in getProjectsByIsFeatured(true)"
                :key="`featured-${index}`"
                :project="project"
                :data-index="index"
            />
          </div>
        </div>

        <!-- Autres projets -->
        <div v-if="getProjectsByIsFeatured(false).length > 0" class="space-y-8">
          <div class="flex items-center gap-3">
            <Icon name="solar:folder-with-files-bold" class="text-2xl text-brand-accent" />
            <h2 class="text-2xl font-bold text-brand-accent">Autres réalisations</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectSmallCard
                v-for="(project, index) in getProjectsByIsFeatured(false)"
                :key="`other-${index}`"
                :project="project"
                :data-index="index"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>