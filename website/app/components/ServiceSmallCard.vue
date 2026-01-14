<script setup lang="ts">
import {Separator} from "~/components/ui/separator";

import {CallToActionType, ServiceType} from "@/types/service"
import type { Service } from "@/types/service";

defineProps<{
  service: Service
}>()

const isFeaturesOpen = ref(false)
</script>

<template>
  <article v-if="service.type === ServiceType.SECONDARY"
           class="flex flex-col gap-8 border-2 border-slate-800 rounded-xl px-6 py-6
                  bg-linear-to-br from-[#111727] to-[#0A0F1C]
                  transition-all duration-200 ease-out hover:scale-102"
  >
    <div class="flex items-start gap-2">
      <div class="bg-[#050816] border-2 border-slate-800 inline-flex items-center justify-center p-1 rounded-lg">
        <Icon :name="service.icon" class="text-3xl text-[#00FF7F]" />
      </div>
      <div>
        <h3 class="text-xl font-bold">{{ service.label }}</h3>
        <p class="text-[#8DA0BA] text-sm">{{ service.description }}</p>
      </div>
    </div>

    <div>
      <button
          @click="isFeaturesOpen = !isFeaturesOpen"
          class="cursor-pointer hidden lg:inline-flex items-center gap-2 text-sm font-medium text-[#00FF7F]
                  transition-colors hover:text-[#00CC99]"
          :aria-expanded="isFeaturesOpen"
      >
        <span>
          {{ isFeaturesOpen ? 'Replier' : 'Fonctionnalités' }}
        </span>

        <Icon
            name="tabler:chevron-down"
            class="transition-transform duration-300"
            :class="{ 'rotate-180': isFeaturesOpen }"
        />
      </button>

      <div
          class="overflow-hidden transition-all duration-300 ease-in-out
                 max-h-none opacity-100
                 lg:max-h-0 lg:opacity-0"
          :class="{
            'lg:max-h-96 lg:opacity-100': isFeaturesOpen
          }"
      >
        <ul class="flex flex-col gap-2 pt-2">
          <li
              v-for="(feature, index) in service.features"
              :key="index"
              class="text-[#8DA0BA] inline-flex items-center gap-1 text-sm"
          >
            <Icon name="icon-park-outline:dot" class="text-[#00FF7F]" />
            <span>{{ feature.label }}</span>
          </li>
        </ul>
      </div>
    </div>

    <Separator orientation="horizontal" class="bg-[#8DA0BA]" />

    <div class="flex justify-between items-center">
      <h3>{{ service.priceText }}</h3>

      <NuxtLink
          to="#contact"
          class="inline-flex items-center gap-1 underline-offset-4 transition-all duration-200 ease-out hover:underline hover:text-[#00FF7F]"
      >
        <span>{{ service.cta.label }}</span>
        <Icon name="tabler:arrow-right" />
      </NuxtLink>
    </div>
  </article>
</template>