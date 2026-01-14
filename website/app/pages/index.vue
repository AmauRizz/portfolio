<script setup lang="ts">
import { ref, computed } from 'vue'
import { z } from "zod"
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"

import { toast } from "vue-sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import {Spinner} from "~/components/ui/spinner";

import { questionItems } from '@/data/questions'
import { skillItems } from '@/data/skills'
import { primaryServicesItems, secondaryServicesItems } from '@/data/services'
import type { IpRecord } from '@/types/mailer'
import type { Skill } from '@/types/skill'

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

const schema = z.object({
  name: z.string().min(2, "Veuillez entrer votre nom."),
  email: z.string().email("L'email n'est pas valide."),
  message: z.string().min(10, "Décrivez un peu votre projet (10 caractères min).")
})

type Schema = z.infer<typeof schema>

const isFormLoading = ref(false)
const isFormDisabled = ref(false)

const isSkillModalOpen = ref(false)
const selectedSkill = ref<Skill | null>(null)

const { handleSubmit, errors, resetForm } = useForm<Schema>({
  validationSchema: toTypedSchema(schema),
  initialValues: {
    name: "",
    email: "",
    message: ""
  }
})

const onSubmit = handleSubmit(async (values) => {
  isFormLoading.value = true

  try {
    await $fetch('/api/mailer', { method: 'POST', body: values })
    toast.success("Formulaire envoyé !", {
      description: "Votre demande de contact a bien été prise en compte."
    })
    resetForm()
  } catch (err) {
    toast.error("Uh Oh! Erreur lors de l'envoi du formulaire", {
      description: "Une erreur est survenue lors de l'envoi de votre demande de contact."
    })
  } finally {
    isFormLoading.value = false

    const result = await $fetch('/api/mailer', {
      method: 'GET',
    })
    const data = result.data.content as { isTimeout: boolean; timeoutUntil?: number }

    const timeout: IpRecord = data.isTimeout
        ? { isTimeout: true, timeoutUntil: data.timeoutUntil! }
        : { isTimeout: false }

    if (timeout && timeout.isTimeout) {
      isFormDisabled.value = true
    }
  }
})

const openModal = (skill: Skill) => {
  selectedSkill.value = skill
  isSkillModalOpen.value = true
}

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

onMounted(async () => {
  const result = await $fetch('/api/mailer', {
    method: 'GET',
  })

  const data = result.data.content as { isTimeout: boolean; timeoutUntil?: number }

  const timeout: IpRecord = data.isTimeout
      ? { isTimeout: true, timeoutUntil: data.timeoutUntil! }
      : { isTimeout: false }

  if (timeout && timeout.isTimeout) {
    isFormDisabled.value = true
  }
})
</script>


<template>
  <main class="bg-[#070A13] text-[#F3F7FB] pt-20 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
    <section id="home" class="flex flex-col gap-16 sm:mt-24 mb-32 scroll-mt-64">
      <div class="flex flex-col items-center gap-4">
        <NuxtPicture
            src="images/pdp.jpeg"
            class="rounded-full overflow-hidden border-4 border-[#00FF7F] drop-shadow-[0_0_12px_#00FF7F] w-32 h-32 object-cover"
            :imgAttrs="{
              alt: 'Image de profil',
            }"
        />
        <div class="flex flex-col gap-8">
          <div class="flex flex-col">
            <h1 class="font-bold text-4xl text-center mb-1">
              Bonjour! Je suis <span class="text-[#00FF7F]">Amaury</span>
            </h1>
            <h2 class="text-[#00FF7F] font-bold text-center mb-6">Étudiant et Freelance</h2>
            <p class="text-[#8DA0BA] text-lg text-center">
              Développeur full-stack motivé par la curiosité et la création. Je construis des projets qui
              m’inspirent et parfois, aident les autres à donner vie à leurs idées aussi.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <NuxtLink
                to="#services"
                class="inline-flex items-center justify-center px-10 py-3 font-bold text-[#171717]
                 bg-linear-to-r from-[#00FF7F] to-[#00CC99] rounded-xl
                 transition-all duration-300 ease-in-out
                 hover:scale-105 focus-visible:scale-105 active:scale-95"
            >
              <span>Mes Services</span>
            </NuxtLink>

<!--
            <NuxtLink
                to="https://api.amaurymulcey.fr"
                target="_blank"
                class="gap-2 text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-3
                      border-2 border-[#00FF7F] rounded-xl
                      transition-all duration-300 ease-in-out
                      hover:scale-105 hover:bg-[#00FF7F] hover:text-[#171717]
                      focus-visible::scale-105 focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]
                      active:scale-95"
            >
              <span>Discover my api's</span>
              <span class="inline-flex items-center">
                <Icon name="mdi:external-link" />
              </span>
            </NuxtLink>
-->
            <NuxtLink
                href="https://buymeacoffee.com/amaurizz"
                target="_blank"
                class="gap-2 text-[#FFFF00] font-bold inline-flex items-center justify-center px-10 py-3
                border-2 border-[#FFFF00] rounded-xl
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-[#FFFF00] hover:text-[#171717]
                focus-visible:scale-105 focus-visible:bg-[#FFFF00] focus-visible:text-[#171717]
                active:scale-95"
            >
              <span class="inline-flex items-center">
                <Icon name="simple-icons:buymeacoffee" />
              </span>
              <span>Me Soutenir</span>
              <span class="inline-flex items-center">
                <Icon name="mdi:external-link" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="flex flex-col gap-16 mb-32 scroll-mt-28">
      <div class="flex flex-col text-center gap-2">
        <h2 class="font-bold text-5xl">Découvrez mes <span class="text-[#00FF7F]">Projets</span></h2>
        <p class="text-[#8DA0BA] text-lg">Mes réalisations favorites après 5 ans d'expérience en développement.</p>
      </div>

      <div class="bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl px-6 py-2">
        <p class="text-center font-bold">Prochainement disponible !</p>
      </div>
    </section>

    <section id="about" class="flex flex-col gap-16 mb-32 scroll-mt-28">
      <div class="flex flex-col text-center gap-2">
        <h2 class="font-bold text-5xl">Plus <span class="text-[#00FF7F]">À propos</span></h2>
        <p class="text-[#8DA0BA] text-lg">Passionné par le développement depuis plus de 5 ans.</p>
      </div>

      <div class="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-12">
        <div>
          <article
              class="flex flex-col gap-8 border-2 border-slate-800 rounded-xl px-6 py-6
              bg-linear-to-br from-[#111727] to-[#0A0F1C]"
          >
            <div class="flex flex-col gap-4">
              <h3 class="font-bold text-xl">Qui suis-je ?</h3>
              <div class="flex flex-col gap-2 text-[#8DA0BA]">
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
              <div class="flex flex-col gap-2 text-[#8DA0BA]">
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
                  class="gap-2 text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-3
                      border-2 border-[#00FF7F] rounded-xl
                      transition-all duration-300 ease-in-out
                      hover:scale-105 hover:bg-[#00FF7F] hover:text-[#171717]
                      focus-visible::scale-105 focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]
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
                        :skill-icon="skill.icon" :skill-name="skill.name" @click="openModal(skill)"
            />

            <SkillModal
                v-if="selectedSkill"
                :open="isSkillModalOpen"
                :skill="selectedSkill"
                @update:open="isSkillModalOpen = $event"
            />
          </article>
        </div>
      </div>
    </section>

    <section id="services" class="flex flex-col gap-16 mb-32 scroll-mt-28">
      <div class="flex flex-col text-center gap-2">
        <h2 class="font-bold text-5xl">Mes <span class="text-[#00FF7F]">Services</span></h2>
        <p class="text-[#8DA0BA] text-lg">Des offres adaptées à tous les budgets et tous les projets.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[3fr_1.2fr] gap-6 items-start">
        <div class="grid gap-4">
          <ServiceBigCard
              v-for="(service, index) in primaryServicesItems"
              :key="index"
              :service="service"
          />
        </div>

        <div class="flex flex-col sm:grid-cols-2 lg:flex lg:flex-col gap-6">
          <ServiceSmallCard
              v-for="(service, index) in secondaryServicesItems"
              :key="index"
              :service="service"
          />
        </div>
      </div>

    </section>

    <section id="faq" class="flex flex-col gap-16 mb-32 scroll-mt-28">
      <div class="flex flex-col text-center gap-2">
        <h2 class="font-bold text-5xl">Questions <span class="text-[#00FF7F]">Fréquentes</span></h2>
      </div>

      <Accordion type="single" collapsible class="space-y-4">
        <AccordionItem
            v-for="(question, index) in questionItems"
            :key="index"
            :value="String(index)"
            class="group relative rounded-2xl bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800
             data-[state=open]:border-[#00FF7F]"
        >
          <AccordionTrigger
              class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left
               text-slate-100 font-semibold text-base md:text-lg hover:no-underline cursor-pointer
               [&>svg]:text-slate-300 [&>svg]:transition-all [&>svg]:duration-200
               data-[state=open]:[&>svg]:rotate-180"
          >
            <span class="transition-all duration-200 ease-out group-hover:text-[#00FF7F]">
              {{ question.label }}
            </span>
          </AccordionTrigger>

          <AccordionContent class="px-6 pb-5 pt-0 text-[#8DA0BA] text-sm md:text-base leading-relaxed">
            {{ question.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section id="contact" class="flex flex-col gap-16 mb-32 scroll-mt-28">
      <div class="flex flex-col text-center gap-2">
        <h2 class="font-bold text-5xl">Me <span class="text-[#00FF7F]">Contacter</span></h2>
        <p class="text-[#8DA0BA] text-lg">Une question, un projet ? N'hésitez pas à me contacter</p>
      </div>

      <div class="flex flex-col gap-16 sm:grid sm:grid-cols-2">
        <div class="flex flex-col items-center sm:items-start gap-8">
          <article class="flex flex-col text-center sm:text-left gap-1">
            <h3 class="font-bold text-xl">Parlons de votre projet !</h3>
            <p class="text-[#8DA0BA]">
              Je suis toujours enthousiaste à l'idée de découvrir de nouveaux projets. Que vous ayez une
              idée précise ou que vous souhaitiez simplement discuter des possibilités, contactez-moi !
            </p>
          </article>

          <div class="flex flex-col gap-4 sm:gap-0">
            <article class="flex flex-col sm:flex-row items-center gap-3 px-2 py-2">
              <div class="flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-3 py-3">
                <Icon name="ic:outline-email" size="2em" class="text-[#00FF7F]" />
              </div>
              <div class="text-center sm:text-left">
                <h4 class="text-[#8DA0BA]">Email</h4>
                <NuxtLink
                    to="mailto:contact@amaurymulcey.fr"
                    class="font-bold underline transition-all duration-200 ease-out hover:text-[#00FF7F] focus-visible:text-[#00FF7F]"
                >
                  contact@amaurymulcey.fr
                </NuxtLink>
              </div>
            </article>

            <article class="flex flex-col sm:flex-row items-center gap-3 px-2 py-2">
              <div class="flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-3 py-3">
                <Icon name="mdi:map-marker-outline" size="2em" class="text-[#00FF7F]" />
              </div>
              <div class="text-center sm:text-left">
                <h4 class="text-[#8DA0BA]">Localisation</h4>
                <p class="font-bold">La Rochelle - Télétravail</p>
              </div>
            </article>
          </div>

          <article class="flex flex-col items-center sm:items-start gap-1">
            <h3 class="font-bold text-xl">Retrouvez-moi sur</h3>

            <div class="flex gap-4">
              <NuxtLink
                  to="https://github.com/AmauRizz"
                  class="group flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-1 py-1"
              >
                <Icon name="mdi:github" size="2em" class="text-[#8DA0BA] transition-all duration-200 ease-out group-hover:text-[#ffffff]" />
              </NuxtLink>

              <NuxtLink
                  to="https://www.linkedin.com/in/amaury-mulcey-pro/"
                  class="group flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-1 py-1"
              >
                <Icon name="mdi:linkedin" size="2em" class="text-[#8DA0BA] transition-all duration-200 ease-out group-hover:text-[#0e76a8]" />
              </NuxtLink>

              <NuxtLink
                  to="https://buymeacoffee.com/amaurizz"
                  class="group flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-1 py-1"
              >
                <Icon name="simple-icons:buymeacoffee" size="2em" class="text-[#8DA0BA] transition-all duration-200 ease-out group-hover:text-[#FFFF00]" />
              </NuxtLink>
            </div>
          </article>
        </div>

        <div
            class="bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl px-6 py-6
           transition-all duration-200 ease-out
           hover:border-[#00FF7F] hover:shadow-[0_0_28px_rgba(0,255,127,0.15)] focus-visible:border-[#00FF7F] focus-visible:shadow-[0_0_28px_rgba(0,255,127,0.15)]"
        >
          <h3 class="font-bold text-xl mb-6">Envoyez-moi un message</h3>

          <form class="space-y-6" @submit.prevent="onSubmit">
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel class="text-slate-100">Nom</FormLabel>
                <FormControl>
                  <Input
                      v-bind="componentField"
                      placeholder="Votre nom"
                      class="bg-[#070A13] border-slate-800 text-slate-100"
                  />
                </FormControl>
                <FormMessage class="text-destructive" />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel class="text-slate-100">Email</FormLabel>
                <FormControl>
                  <Input
                      v-bind="componentField"
                      type="email"
                      placeholder="vous@exemple.com"
                      class="bg-[#070A13] border-slate-800 text-slate-100"
                  />
                </FormControl>
                <FormMessage class="text-destructive" />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="message">
              <FormItem>
                <FormLabel class="text-slate-100">Message</FormLabel>
                <FormControl>
            <Textarea
                v-bind="componentField"
                placeholder="Décrivez votre question ou un besoin, le délai, le budget, etc"
                rows="6"
                class="bg-[#070A13] border-slate-800 text-slate-100 resize-none"
            />
                </FormControl>
                <FormDescription class="text-[#8DA0BA]">
                  10 caractères minimum.
                </FormDescription>
                <FormMessage class="text-destructive" />
              </FormItem>
            </FormField>

            <div
                class="w-full"
                :class="{ 'cursor-not-allowed': isFormDisabled || isFormLoading }"
            >
              <Button
                  type="submit"
                  :disabled="isFormDisabled || isFormLoading"
                  class="w-full text-[#171717] font-bold inline-flex items-center justify-center
                       px-10 py-3 rounded-xl cursor-pointer
                       bg-linear-to-r from-[#00FF7F] to-[#00CC99]
                       transition-all duration-300 ease-in-out
                       hover:scale-105 focus-visible:scle-105 active:scale-95"
              >
                <span v-if="isFormDisabled" class="inline-flex items-center gap-2">Indisponible <Icon name="mdi:clock-outline" class="text-xl" /></span>
                <span v-else-if="isFormLoading" class="inline-flex items-center gap-2">Traitement en cours <Spinner /></span>
                <span v-else class="inline-flex items-center gap-2">Envoyer</span>
              </Button>
            </div>
          </form>

          <p class="text-xs text-[#8DA0BA] mt-4">
            En envoyant ce message, vous acceptez nos <NuxtLink to="/privacy" class="underline transition-all duration-200 ease-out hover:text-[#00FF7F] focus-visible:text-[#00FF7F]">politique de confidentialité</NuxtLink>.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>