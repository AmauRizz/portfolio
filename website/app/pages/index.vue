<script setup lang="ts">
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

import { faqItems } from '@/data/faq'
import { skillItems } from '@/data/skills'
import type { IpRecord } from '@/types/mailer'
import type { Skill } from '@/types/skills'

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

const isLoading = ref(false)
const isDisabled = ref(false)

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
  isLoading.value = true

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
    isLoading.value = false

    const result = await $fetch('/api/mailer', {
      method: 'GET',
    })
    const data = result.data.content as { isTimeout: boolean; timeoutUntil?: number }

    const timeout: IpRecord = data.isTimeout
        ? { isTimeout: true, timeoutUntil: data.timeoutUntil! }
        : { isTimeout: false }

    if (timeout && timeout.isTimeout) {
      isDisabled.value = true
    }
  }
})

const openModal = (skill: Skill) => {
  selectedSkill.value = skill
  isSkillModalOpen.value = true
}

onMounted(async () => {
  const result = await $fetch('/api/mailer', {
    method: 'GET',
  })

  const data = result.data.content as { isTimeout: boolean; timeoutUntil?: number }

  const timeout: IpRecord = data.isTimeout
      ? { isTimeout: true, timeoutUntil: data.timeoutUntil! }
      : { isTimeout: false }

  if (timeout && timeout.isTimeout) {
    isDisabled.value = true
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
                class="text-[#171717] font-bold inline-flex items-center justify-center px-10 py-2 bg-[#00FF7F] rounded-xl
                     transition duration-200 ease-out
                     hover:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)] focus-visible:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)]"
            >
              Mes Services
            </NuxtLink>
<!--
            <NuxtLink
                to="https://api.amaurymulcey.fr"
                target="_blank"
                class="gap-2 text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#00FF7F] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#00FF7F] hover:text-[#171717] focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]"
            >
              Discover my api's
              <Icon name="mdi:external-link" />
            </NuxtLink>
-->
            <NuxtLink
                href="https://buymeacoffee.com/amaurizz"
                target="_blank"
                class="gap-2 text-[#FFFF00] font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#FFFF00] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#FFFF00] hover:text-[#171717] focus-visible:bg-[#FFFF00] focus-visible:text-[#171717]"
            >
              <Icon name="simple-icons:buymeacoffee" />
              Me soutenir
              <Icon name="mdi:external-link" />
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
          <article class="flex flex-col gap-8 bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl px-6 py-6">
            <div class="flex flex-col gap-1">
              <h3 class="font-bold text-xl">Qui suis-je ?</h3>
              <p class="text-[#8DA0BA]">
                Développeur web freelance passionné, je me spécialise dans la création de sites vitrines modernes
                et performants. Mon objectif est de transformer vos idées en expériences digitales uniques.
              </p>
            </div>

            <!--
            <div class="flex flex-col gap-1">
              <h3 class="font-bold text-xl">Parcours professionnel</h3>

            </div>
            -->

            <div class="text-center">
              <NuxtLink
                  to="/cv.pdf"
                  target="_blank"
                  class="gap-2 text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#00FF7F] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#00FF7F] hover:text-[#171717] focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]"
              >
                <Icon name="pepicons-pop:cv" />
                Visualiser mon CV
                <Icon name="mdi:external-link" />
              </NuxtLink>
            </div>
          </article>
        </div>

        <div class="flex flex-col gap-8 sm:gap-4">
          <h3 class="font-bold text-xl text-center sm:text-left">Mes outils de développement</h3>

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

      <div class="flex flex-col gap-8 sm:gap-12">
        <div class="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-12">
          <article
              class="relative flex flex-col justify-between gap-8 bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-[#00FF7F] rounded-xl px-6 py-6
                   transition-shadow duration-200 ease-out
                   hover:shadow-[0_0_28px_rgba(0,255,127,0.25)]"
          >
            <span
                class="absolute -top-3 left-10 z-10 flex items-center gap-1 rounded-lg bg-[#00FF7F] px-3 py-1 text-xs font-bold uppercase text-[#171717] shadow-md"
            >
              <Icon name="material-symbols:star" class="text-[#171717]"/>
              Populaire
            </span>

            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="font-bold text-3xl">Site Vitrine</h3>
                <p class="text-[#8DA0BA]">La solution clé en main idéale pour présenter votre activité sur le web.</p>
              </div>

              <h4 class="font-bold text-3xl">349 €</h4>

              <ul class="text-[#8DA0BA] space-y-3">
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Design moderne et responsive.
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Jusqu’à 5 pages
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Formulaire de contact.
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Optimisation du référencement.
                </li>
              </ul>
            </div>

            <NuxtLink
                to="#contact"
                class="text-[#171717] font-bold inline-flex items-center justify-center px-10 py-2 bg-[#00FF7F] rounded-xl
                     transition duration-200 ease-out
                     hover:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)] focus-visible:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)]"
            >
              Prendre rendez-vous
            </NuxtLink>
          </article>

          <article
              class="flex flex-col justify-between gap-8 bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl px-6 py-6
                   transition-all duration-200 ease-out
                   hover:border-[#00FF7F] hover:shadow-[0_0_28px_rgba(0,255,127,0.25)]"
          >
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="font-bold text-3xl">Projet Sur-Mesure</h3>
                <p class="text-[#8DA0BA]">Un projet unique qui nécessite des fonctionnalités avancées.</p>
              </div>

              <h4 class="font-bold text-3xl">Sur devis</h4>

              <ul class="text-[#8DA0BA] space-y-3">
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Analyse poussée de vos besoins.
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Fonctionnalités avancées.
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Base de données.
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  API et intégrations.
                </li>
              </ul>
            </div>

            <NuxtLink
                to="#contact"
                class="text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#00FF7F] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#00FF7F] hover:text-[#171717] focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]"
            >
              Faire un devis
            </NuxtLink>
          </article>

          <article
              class="sm:hidden flex flex-col justify-between gap-8 bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl px-6 py-6
                   transition-all duration-200 ease-out
                   hover:border-[#00FF7F] hover:shadow-[0_0_28px_rgba(0,255,127,0.25)]"
          >
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="font-bold text-3xl">Maintenance</h3>
                <p class="text-[#8DA0BA]">Bénéficiez d'un support et gardez votre projet à jour et hébergé sur un serveur sécurisé.</p>
              </div>

              <h4 class="font-bold text-3xl">45 €/mois</h4>

              <ul class="text-[#8DA0BA] space-y-3">
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Mise en production de votre application.
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="gg:check-o" class="text-[#00FF7F]" />
                  Sécurisation du serveur.
                </li>
              </ul>
            </div>

            <NuxtLink
                to="#contact"
                class="text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#00FF7F] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#00FF7F] hover:text-[#171717] focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]"
            >
              En savoir plus
            </NuxtLink>
          </article>
        </div>

        <article
            class="hidden sm:flex justify-between gap-8 bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl px-6 py-6
                   transition-all duration-200 ease-out
                   hover:border-[#00FF7F] hover:shadow-[0_0_28px_rgba(0,255,127,0.25)]"
        >
          <div>
            <div>
              <h3 class="font-bold text-3xl">Maintenance</h3>
              <p class="text-[#8DA0BA]">
                Bénéficiez d'un support et gardez votre projet à jour et hébérgé sur un serveur sécurisé.
              </p>
            </div>
          </div>

          <div class="sm:flex sm:flex-col sm:gap-2">
            <h4 class="font-bold text-xl">45 €/mois</h4>
            <NuxtLink
                to="#contact"
                class="text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#00FF7F] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#00FF7F] hover:text-[#171717] focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]"
            >
              En savoir plus
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section id="faq" class="flex flex-col gap-16 mb-32 scroll-mt-28">
      <div class="flex flex-col text-center gap-2">
        <h2 class="font-bold text-5xl">Questions <span class="text-[#00FF7F]">Fréquentes</span></h2>
      </div>

      <Accordion type="single" collapsible class="space-y-4">
        <AccordionItem
            v-for="(question, index) in faqItems"
            :key="index"
            :value="String(index)"
            class="group relative rounded-2xl bg-gradient-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800
             data-[state=open]:border-[#00FF7F]"
        >
          <AccordionTrigger
              class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left
               text-slate-100 font-semibold text-base md:text-lg hover:no-underline cursor-pointer
               [&>svg]:text-slate-300 [&>svg]:transition-all [&>svg]:duration-200
               data-[state=open]:[&>svg]:rotate-180"
          >
            <span class="transition-colors duration-200 ease-out group-hover:text-[#00FF7F]">
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
                    class="font-bold underline transition-colors duration-200 ease-out hover:text-[#00FF7F] focus-visible:text-[#00FF7F]"
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
                <Icon name="mdi:github" size="2em" class="text-[#8DA0BA] transition-colors duration-200 ease-out group-hover:text-[#ffffff]" />
              </NuxtLink>

              <NuxtLink
                  to="https://www.linkedin.com/in/amaury-mulcey-pro/"
                  class="group flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-1 py-1"
              >
                <Icon name="mdi:linkedin" size="2em" class="text-[#8DA0BA] transition-colors duration-200 ease-out group-hover:text-[#0e76a8]" />
              </NuxtLink>

              <NuxtLink
                  to="https://buymeacoffee.com/amaurizz"
                  class="group flex justify-center items-center bg-linear-to-br from-[#111727] to-[#0A0F1C] rounded-xl px-1 py-1"
              >
                <Icon name="simple-icons:buymeacoffee" size="2em" class="text-[#8DA0BA] transition-colors duration-200 ease-out group-hover:text-[#FFFF00]" />
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
                      placeholder="Votre nom."
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
                      placeholder="vous@exemple.com."
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
                placeholder="Décrivez votre besoin, le délai, le budget, etc."
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

            <Button
                type="submit"
                :disabled="isLoading"
                class="w-full text-[#00FF7F] bg-[#FFFFFF]/0 font-bold inline-flex items-center justify-center px-10 py-2 border-2 border-[#00FF7F] rounded-xl
                     transition-colors duration-200 ease-out
                     hover:bg-[#00FF7F] hover:text-[#171717] focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]
                     cursor-pointer"

            >
              <span v-if="isDisabled" class="inline-flex items-center gap-2">Indisponible <Icon name="mdi:clock-outline" class="text-xl" /></span>
              <span v-else-if="isLoading">Traitement en cours <Spinner /></span>
              <span v-else class="flex items-center gap-2">Envoyer</span>
            </Button>
          </form>

          <p class="text-xs text-[#8DA0BA] mt-4">
            En envoyant ce message, vous acceptez nos <NuxtLink to="/privacy" class="underline transition-colors duration-200 ease-out hover:text-[#00FF7F] focus-visible:text-[#00FF7F]">politique de confidentialité</NuxtLink>.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>