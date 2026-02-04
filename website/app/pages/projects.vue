<script setup lang="ts">
import { ref, computed } from 'vue';
import { projectItems } from '@/contents/projects';
import { ProjectCategories } from '@/types/project';

const searchQuery = ref('');
const selectedCategory = ref<ProjectCategories | 'all'>('all');
const selectedFrameworks = ref<string[]>([]);
const layoutMode = ref<'grid' | 'list'>('list');

const allFrameworks = computed(() => {
  const frameworks = new Set<string>();
  projectItems.forEach(project => {
    project.stack.forEach(skill => {
      frameworks.add(skill.name);
    });
  });
  return Array.from(frameworks).sort();
});

const filteredProjects = computed(() => {
  return projectItems.filter(project => {
    const matchesSearch = searchQuery.value === '' ||
        project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        project.stack.some(skill => skill.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
        project.category.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory = selectedCategory.value === 'all' ||
        project.category === selectedCategory.value;

    const matchesFrameworks = selectedFrameworks.value.length === 0 ||
        selectedFrameworks.value.some(framework =>
            project.stack.some(skill => skill.name === framework)
        );

    return matchesSearch && matchesCategory && matchesFrameworks;
  });
});

const toggleFramework = (framework: string) => {
  const index = selectedFrameworks.value.indexOf(framework);
  if (index > -1) {
    selectedFrameworks.value.splice(index, 1);
  } else {
    selectedFrameworks.value.push(framework);
  }
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'all';
  selectedFrameworks.value = [];
};

const hasActiveFilters = computed(() => {
  return searchQuery.value !== '' ||
      selectedCategory.value !== 'all' ||
      selectedFrameworks.value.length > 0;
});
</script>

<template>
  <main class="text-[#F3F7FB] pt-20 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
    <section class="mb-16">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
        <div class="space-y-4">
          <NuxtLink
              to="/"
              class="inline-flex items-center gap-1 underline-offset-4 transition-all duration-200 ease-out hover:underline hover:text-[#00FF7F]"
          >
            <Icon name="tabler:arrow-left" />
            <span>Retour à l'accueil</span>
          </NuxtLink>

          <div class="space-y-2">
            <h1 class="font-bold text-5xl lg:text-6xl">
              Tous <span class="text-brand-primary">mes Projets</span>
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
            <div class="text-3xl font-bold text-white">{{ new Set(projectItems.flatMap(p => p.stack).map(skill => skill.name)).size }}</div>
            <div class="text-sm text-[#8DA0BA]">Outils</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8 space-y-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 relative">
          <Icon
              name="tabler:search"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-[#8DA0BA] text-xl pointer-events-none"
          />
          <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher par nom, framework ou catégorie..."
              class="w-full pl-12 pr-4 py-3 bg-[#1A2332] border border-[#2A3647] rounded-lg text-[#F3F7FB] placeholder-[#8DA0BA] focus:outline-none focus:border-brand-primary transition-colors"
          />
          <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-[#8DA0BA] hover:text-[#F3F7FB] transition-colors"
          >
            <Icon name="tabler:x" class="text-xl" />
          </button>
        </div>

        <div class="flex gap-2">
          <button
              @click="layoutMode = 'list'"
              :class="[
              'px-4 py-3 rounded-lg border transition-all duration-200',
              layoutMode === 'list'
                ? 'bg-brand-primary border-brand-primary text-[#0A1628]'
                : 'bg-[#1A2332] border-[#2A3647] text-[#8DA0BA] hover:border-brand-primary'
            ]"
          >
            <Icon name="tabler:list" class="text-xl" />
          </button>
          <button
              @click="layoutMode = 'grid'"
              :class="[
              'px-4 py-3 rounded-lg border transition-all duration-200',
              layoutMode === 'grid'
                ? 'bg-brand-primary border-brand-primary text-[#0A1628]'
                : 'bg-[#1A2332] border-[#2A3647] text-[#8DA0BA] hover:border-brand-primary'
            ]"
          >
            <Icon name="tabler:grid-dots" class="text-xl" />
          </button>
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold text-[#8DA0BA] uppercase tracking-wider">Type de projet</h3>
          <button
              v-if="hasActiveFilters"
              @click="resetFilters"
              class="text-sm text-brand-primary hover:underline flex items-center gap-1"
          >
            <Icon name="tabler:refresh" class="text-base" />
            Réinitialiser
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
              @click="selectedCategory = 'all'"
              :class="[
              'px-4 py-2 rounded-lg border transition-all duration-200 text-sm font-medium',
              selectedCategory === 'all'
                ? 'bg-brand-primary border-brand-primary text-[#0A1628]'
                : 'bg-[#1A2332] border-[#2A3647] text-[#F3F7FB] hover:border-brand-primary'
            ]"
          >
            Tous
          </button>
          <button
              v-for="category in Object.values(ProjectCategories)"
              :key="category"
              @click="selectedCategory = category"
              :class="[
              'px-4 py-2 rounded-lg border transition-all duration-200 text-sm font-medium',
              selectedCategory === category
                ? 'bg-brand-primary border-brand-primary text-[#0A1628]'
                : 'bg-[#1A2332] border-[#2A3647] text-[#F3F7FB] hover:border-brand-primary'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-sm font-semibold text-[#8DA0BA] uppercase tracking-wider">Frameworks & Technologies</h3>
        <div class="flex flex-wrap gap-2">
          <button
              v-for="framework in allFrameworks"
              :key="framework"
              @click="toggleFramework(framework)"
              :class="[
              'px-3 py-1.5 rounded-lg border transition-all duration-200 text-sm',
              selectedFrameworks.includes(framework)
                ? 'bg-brand-primary border-brand-primary text-[#0A1628]'
                : 'bg-[#1A2332] border-[#2A3647] text-[#F3F7FB] hover:border-brand-primary'
            ]"
          >
            {{ framework }}
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2 text-sm text-[#8DA0BA]">
        <Icon name="tabler:filter" />
        <span>
          {{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }} trouvé{{ filteredProjects.length > 1 ? 's' : '' }}
        </span>
      </div>
    </section>

    <section class="mb-16">
      <div v-if="filteredProjects.length > 0">
        <div v-if="layoutMode === 'list'" class="grid grid-cols-1 gap-6">
          <ProjectBigCard
              v-for="(project, index) in filteredProjects"
              :key="index"
              :project="project"
              :show-badge="false"
          />
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectSmallCard
              v-for="(project, index) in filteredProjects"
              :key="index"
              :project="project"
              :show-badge="false"
          />
        </div>
      </div>

      <div v-else class="text-center py-16 space-y-4">
        <Icon name="tabler:search-off" class="text-6xl text-[#8DA0BA] mx-auto" />
        <h3 class="text-2xl font-bold text-[#F3F7FB]">Aucun projet trouvé</h3>
        <p class="text-[#8DA0BA] max-w-md mx-auto">
          Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
        </p>
        <button
            @click="resetFilters"
            class="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-[#0A1628] rounded-lg font-medium hover:bg-[#00CC66] transition-colors"
        >
          <Icon name="tabler:refresh" />
          Réinitialiser les filtres
        </button>
      </div>
    </section>
  </main>
</template>