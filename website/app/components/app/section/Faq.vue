<script setup lang="ts">
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion";
import {questionItems} from "~/contents/questions";
</script>

<template>
  <section id="faq" class="flex flex-col gap-16 mb-32 scroll-mt-28">
    <div class="flex flex-col text-center gap-2">
      <h2 class="font-bold text-5xl">Questions <span class="text-brand-primary">Fréquentes</span></h2>
    </div>

    <Accordion type="single" collapsible class="space-y-4">
      <AccordionItem
          v-for="(question, index) in questionItems"
          :key="index"
          :value="String(index)"
          class="group relative rounded-2xl bg-gradient-custom border-2 border-slate-800
             data-[state=open]:border-brand-primary"
      >
        <AccordionTrigger
            class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left
               text-slate-100 font-semibold text-base md:text-lg hover:no-underline cursor-pointer
               [&>svg]:text-slate-300 [&>svg]:transition-all [&>svg]:duration-200
               data-[state=open]:[&>svg]:rotate-180"
        >
            <span class="transition-all duration-200 ease-out group-hover-text-brand-primary">
              {{ question.label }}
            </span>
        </AccordionTrigger>

        <AccordionContent class="px-6 pb-5 pt-0 text-custom-secondary text-sm md:text-base leading-relaxed">
          {{ question.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>

</template>