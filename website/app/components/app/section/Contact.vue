<script setup lang="ts">
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/components/ui/form";
import {Textarea} from "~/components/ui/textarea";
import {Spinner} from "~/components/ui/spinner";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import {ref} from "vue";
import {toast} from "vue-sonner";
import type {IpRecord} from "~/types/mailer";
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import { z } from "zod"

type Schema = z.infer<typeof schema>

const schema = z.object({
  name: z.string().min(2, "Veuillez entrer votre nom."),
  email: z.string().email("L'email n'est pas valide."),
  message: z.string().min(10, "Décrivez un peu votre projet (10 caractères min).")
})

const isFormLoading = ref(false)
const isFormDisabled = ref(false)

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
  <section id="contact" class="flex flex-col gap-16 mb-32 scroll-mt-28">
    <div class="flex flex-col text-center gap-2">
      <h2 class="font-bold text-5xl">Me <span class="text-brand-primary">Contacter</span></h2>
      <p class="text-custom-secondary text-lg">Une question, un projet ? N'hésitez pas à me contacter</p>
    </div>

    <div class="flex flex-col gap-16 sm:grid sm:grid-cols-2">
      <div class="flex flex-col items-center sm:items-start gap-8">
        <article class="flex flex-col text-center sm:text-left gap-1">
          <h3 class="font-bold text-xl">Parlons de votre projet !</h3>
          <p class="text-custom-secondary">
            Je suis toujours enthousiaste à l'idée de découvrir de nouveaux projets. Que vous ayez une
            idée précise ou que vous souhaitiez simplement discuter des possibilités, contactez-moi !
          </p>
        </article>

        <div class="flex flex-col gap-4 sm:gap-0">
          <article class="flex flex-col sm:flex-row items-center gap-3 px-2 py-2">
            <div class="flex justify-center items-center bg-gradient-custom rounded-xl px-3 py-3">
              <Icon name="ic:outline-email" size="2em" class="text-brand-primary" />
            </div>
            <div class="text-center sm:text-left">
              <h4 class="text-custom-secondary">Email</h4>
              <NuxtLink
                  to="mailto:contact@amaurymulcey.fr"
                  class="font-bold underline transition-all duration-200 ease-out hover-text-brand-primary focus-visible-text-brand-primary"
              >
                contact@amaurymulcey.fr
              </NuxtLink>
            </div>
          </article>

          <article class="flex flex-col sm:flex-row items-center gap-3 px-2 py-2">
            <div class="flex justify-center items-center bg-gradient-custom rounded-xl px-3 py-3">
              <Icon name="mdi:map-marker-outline" size="2em" class="text-brand-primary" />
            </div>
            <div class="text-center sm:text-left">
              <h4 class="text-custom-secondary">Localisation</h4>
              <p class="font-bold">La Rochelle - Télétravail</p>
            </div>
          </article>
        </div>

        <article class="flex flex-col items-center sm:items-start gap-1">
          <h3 class="font-bold text-xl">Retrouvez-moi sur</h3>

          <div class="flex gap-4">
            <NuxtLink
                to="https://github.com/AmauRizz"
                target="_blank"
                class="group flex justify-center items-center bg-gradient-custom rounded-xl px-1 py-1"
            >
              <Icon name="mdi:github" size="2em" class="text-custom-secondary transition-all duration-200 ease-out group-hover:text-[#ffffff]" />
            </NuxtLink>

            <NuxtLink
                to="https://www.linkedin.com/in/amaury-mulcey-pro/"
                target="_blank"
                class="group flex justify-center items-center bg-gradient-custom rounded-xl px-1 py-1"
            >
              <Icon name="mdi:linkedin" size="2em" class="text-custom-secondary transition-all duration-200 ease-out group-hover:text-[#0e76a8]" />
            </NuxtLink>

            <NuxtLink
                to="https://buymeacoffee.com/amaurizz"
                target="_blank"
                class="group flex justify-center items-center bg-gradient-custom rounded-xl px-1 py-1"
            >
              <Icon name="simple-icons:buymeacoffee" size="2em" class="text-custom-secondary transition-all duration-200 ease-out group-hover:text-[#FFFF00FF]" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <div
          class="bg-gradient-custom border-2 border-slate-800 rounded-xl px-6 py-6
           transition-all duration-200 ease-out
           hover:border-brand-primary hover:shadow-[0_0_28px_var(--brand-primary)] focus-visible:border-brand-primary focus-visible:shadow-[0_0_28px_var(--brand-primary)]"
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
                    class="bg-dark-primary border-slate-800 text-slate-100"
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
                    class="bg-dark-primary border-slate-800 text-slate-100"
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
                class="bg-dark-primary border-slate-800 text-slate-100 resize-none"
            />
              </FormControl>
              <FormDescription class="text-custom-secondary">
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
                class="w-full text-custom-button font-bold inline-flex items-center justify-center
                       px-10 py-3 rounded-xl cursor-pointer
                       bg-gradient-brand
                       transition-all duration-300 ease-in-out
                       hover:scale-105 focus-visible:scle-105 active:scale-95"
            >
              <span v-if="isFormDisabled" class="inline-flex items-center gap-2">Indisponible <Icon name="mdi:clock-outline" class="text-xl" /></span>
              <span v-else-if="isFormLoading" class="inline-flex items-center gap-2">Traitement en cours <Spinner /></span>
              <span v-else class="inline-flex items-center gap-2">Envoyer</span>
            </Button>
          </div>
        </form>

        <p class="text-xs text-custom-secondary mt-4">
          En envoyant ce message, vous acceptez nos <NuxtLink to="/privacy" class="underline transition-all duration-200 ease-out hover-text-brand-primary focus-visible-text-brand-primary">politique de confidentialité</NuxtLink>.
        </p>
      </div>
    </div>
  </section>
</template>