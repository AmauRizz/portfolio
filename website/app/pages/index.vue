<script setup lang="ts">
import 'vue-sonner/style.css';
import { Toaster } from '@/components/ui/sonner';

useHead({
  title: 'Amaury Mulcey • Développeur Freelance Web & Étudiant',
  meta: [
    { name: 'description', content: 'Amaury Mulcey, développeur web freelance et étudiant. Découvrez mon portfolio, mes projets et mes compétences en développement web.' },

    { property: 'og:title', content: 'Amaury Mulcey • Développeur Freelance Web' },
    { property: 'og:description', content: 'Amaury Mulcey, développeur web freelance et étudiant. Découvrez mon portfolio, mes projets et mes compétences en développement web.' },
    { property: 'og:url', content: 'https://www.amaurymulcey.fr' },
    { property: 'og:image', content: 'https://www.amaurymulcey.fr/web-app-manifest-512x512.png' },

    { name: 'twitter:title', content: 'Amaury Mulcey • Développeur Freelance Web' },
    { name: 'twitter:description', content: 'Amaury Mulcey, développeur web freelance et étudiant. Découvrez mon portfolio, mes projets et mes compétences en développement web.' },
    { name: 'twitter:image', content: 'https://www.amaurymulcey.fr/web-app-manifest-512x512.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'theme-color', content: '#00FF7F' },

    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.amaurymulcey.fr' }
  ]
})

const {
  activeModal,
  selectedSkill,
  toggleModal
} = useModal()
</script>


<template>
  <main class="bg-[#070A13] text-[#F3F7FB] pt-20 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
    <AppSectionHero />
    <AppSectionProjects />
    <AppSectionAbout />
    <AppSectionServices />
    <AppSectionContact />

    <SkillModal
        v-if="activeModal === 'skill' && selectedSkill"
        :open="true"
        :skill="selectedSkill"
        @update:open="() => toggleModal('skill', null)"
    />

    <Toaster closeButton />
  </main>
</template>