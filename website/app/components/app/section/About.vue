<script setup lang="ts">
import {skillItems} from "~/contents/skills";
import {computed} from "vue";

const age = computed(() => {
  const today = new Date()
  let birthDate = new Date('2004-10-03')
  let years = today.getFullYear() - birthDate.getFullYear()

  const monthDiff = today.getMonth() - birthDate.getMonth()
  const dayDiff = today.getDate() - birthDate.getDate()
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--
  }

  return years
})
</script>

<template>
  <section id="about" class="flex flex-col gap-16 mb-32 scroll-mt-28">
    <div class="flex flex-col text-center gap-2">
      <h2 class="font-bold text-5xl">Plus <span class="text-brand-primary">À propos</span></h2>
      <p class="text-custom-secondary text-lg">Passionné par le développement depuis plus de 5 ans.</p>
    </div>

    <div class="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-12">
      <div>
        <article
            class="flex flex-col gap-8 border-2 border-slate-800 rounded-xl px-6 py-6
              bg-gradient-custom"
        >
          <div class="flex flex-col gap-4">
            <h3 class="font-bold text-xl">Qui suis-je ?</h3>
            <div class="flex flex-col gap-2 text-custom-secondary">
              <p>
                Je m'appelle <strong>Amaury Mulcey</strong> et je suis étudiant en informatique ainsi que développeur freelance de <strong>{{ age }} ans</strong>.
                Je suis passionné par l'informatique, notamment par la création de projets variés, qu’il s’agisse de sites vitrines, d’applications plus complexes ou même de jeux.
                <strong>Ma seule limite est mon imagination !</strong>
              </p>

              <p>
                En bref, j’adore transformer des idées en projets concrets et apprendre en expérimentant de nouvelles technologies.
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2 text-custom-secondary">
              <SchoolCard name="La Rochelle Université"
                          icon="https://www.univ-larochelle.fr/wp-content/uploads/png/logo-universite-de-la-rochelle-2X.png"
                          description="Licence d'informatique"
                          :entry-year="new Date('2023-09-01')"
                          :exit-year="new Date()"
              />
              <SchoolCard name="Université de Galway"
                          icon="https://ih1.redbubble.net/image.5764242744.2288/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                          description="Erasmus d'un semestre à Galway en Irlande"
                          :entry-year="new Date('2025-09-01')"
                          :exit-year="new Date('2026-01-01')"
              />
            </div>
          </div>

          <div class="text-center">
            <NuxtLink
                to="/cv.pdf"
                target="_blank"
                class="gap-2 text-brand-primary font-bold inline-flex items-center justify-center px-10 py-3
                      border-2 border-brand-primary rounded-xl
                      transition-all duration-300 ease-in-out
                      hover:scale-105 hover:bg-brand-primary hover:text-custom-button
                      focus-visible::scale-105 focus-visible:bg-brand-primary focus-visible:text-custom-button
                      active:scale-95"
            >
              <span>Visualiser mon CV</span>
              <span class="inline-flex items-center">
                  <Icon name="mdi:external-link" />
                </span>
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="flex flex-col gap-8 sm:gap-4">
        <h3 class="font-bold text-xl text-center sm:text-left">Ma stack de développement</h3>

        <article class="flex flex-wrap gap-3 justify-center sm:justify-start">
          <SkillBadge v-for="(skill, index) in skillItems"
                      :key="index"
                      :skill="skill"
          />
        </article>
      </div>
    </div>
  </section>
</template>