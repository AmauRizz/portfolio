<script setup lang="ts">
</script>

<template>
  <section id="projects" class="flex flex-col gap-16 mb-32 scroll-mt-28">
    <div class="flex flex-col text-center gap-2">
      <h2 class="font-bold text-5xl">Découvrez mes <span class="text-[#00FF7F]">Projets</span></h2>
      <p class="text-[#8DA0BA] text-lg">Mes réalisations favorites après 5 ans d'expérience en développement.</p>
    </div>

    <div class="flex flex-col gap-8">
      <ProjectBigCard
          v-for="(project, index) in getProjectsByIsFeatured(true)"
          :key="index"
          :project="project"
      />

      <div class="grid grid-cols-2 gap-8">
        <ProjectSmallCard
            v-for="(project, index) in getProjectsByIsFeatured(false).slice(0,2)"
            :key="index"
            :project="project"
        />
      </div>
    </div>

    <div class="flex flex-col items-center">
      <NuxtLink
          to="projects"
          class="inline-flex items-center gap-1 underline-offset-4 transition-all duration-200 ease-out hover:underline hover:text-[#00FF7F]"
      >
        <span>Voir tous mes projets</span>
        <Icon name="tabler:arrow-right" />
      </NuxtLink>
    </div>
  </section>
</template>