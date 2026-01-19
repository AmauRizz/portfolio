<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { CarouselApi } from '~/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import {Separator} from "~/components/ui/separator";

import { ServiceType, type Service } from '~/types/service'

defineProps<{
  service: Service
}>()

const api = ref<CarouselApi | null>(null)
const selectedIndex = ref(0)
const snapCount = ref(0)

const onSelect = () => {
  if (!api.value) return
  selectedIndex.value = api.value.selectedScrollSnap()
}

const onInit = (val: CarouselApi) => {
  api.value = val
  if (!val) return;

  snapCount.value = val.scrollSnapList().length
  val.on('select', onSelect)
  onSelect()
}

onMounted(() => {
  window.addEventListener('resize', () => {
    api.value?.reInit()
  })
})
</script>

<template>
  <article v-if="service.type === ServiceType.PRIMARY"
           class="flex flex-col gap-8 border-2 border-slate-800 rounded-xl px-6 py-6
                  bg-linear-to-br from-[#111727] to-[#0A0F1C]
                  transition-all duration-200 ease-out hover:scale-102"
  >
    <div class="flex flex-col-reverse gap-4 sm:flex-row sm:gap-0 sm:justify-between">
      <div class="flex items-start gap-2">
        <div class="bg-[#050816] border-2 border-slate-800 inline-flex items-center justify-center p-1 rounded-lg">
          <Icon :name="service.icon" class="text-5xl text-[#00FF7F]" />
        </div>
        <div>
          <h3 class="text-2xl font-bold">{{ service.label }}</h3>
          <p class="text-[#8DA0BA]">{{ service.description }}</p>
        </div>
      </div>

      <div>
        <div class="bg-[#00FF7F] text-[#000000] inline-flex items-center gap-1 rounded-full px-2">
          <Icon name="material-symbols:star-rounded"/>
          <p>Populaire</p>
        </div>
      </div>
    </div>

    <Separator orientation="horizontal" class="hidden sm:flex bg-[#8DA0BA]" />

    <div class="flex flex-col gap-6">
      <div class="hidden sm:flex relative group">
        <Carousel
            :opts="{ align: 'start', loop: true }"
            @init-api="onInit"
            class="relative"
        >
          <CarouselContent class="cursor-grab active:cursor-grabbing">
            <CarouselItem
                v-for="(project, index) in service.projects"
                :key="index"
                class="basis-full md:basis-1/2"
            >
              <div class="flex flex-col gap-3 rounded-xl border-2 border-slate-800 bg-[#050816]  p-4">
                <p class="font-bold">{{ project.label }}</p>
                <NuxtImg
                    :src="'/images/' + project.image"
                    class="rounded-lg border border-slate-800"
                />

                <NuxtLink
                    :to="'https://' + project.url"
                    target="_blank"
                    class="inline-flex items-center gap-1 text-sm underline-offset-4 transition-all duration-200 ease-out hover:underline hover:text-[#00FF7F]"
                >
                  <span>{{ project.url }}</span>
                  <Icon name="mdi:external-link" />
                </NuxtLink>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div
              class="absolute bottom right-3 hidden md:flex gap-2 opacity-100"
          >
            <CarouselPrevious
                class="static cursor-pointer h-9 w-9 rounded-full
               bg-black/40 backdrop-blur
               border border-slate-700
               hover:bg-[#00FF7F] hover:text-black"
            />
            <CarouselNext
                class="static cursor-pointer h-9 w-9 rounded-full
               bg-black/40 backdrop-blur
               border border-slate-700
               hover:bg-[#00FF7F] hover:text-black"
            />
          </div>

          <div class="flex justify-center gap-2 mt-4">
            <button
                v-for="i in snapCount"
                :key="i"
                @click="api?.scrollTo(i - 1)"
                :data-active="selectedIndex === i - 1"
                class="cursor-pointer h-1.5 w-6 rounded-full
                       bg-slate-700 transition-all duration-300
                       data-[active=true]:bg-[#00FF7F]
                       data-[active=true]:w-10"
            />
          </div>

        </Carousel>
      </div>

      <ul class="flex flex-col gap-2 sm:flex-row">
        <li
            v-for="(feature, index) in service.features"
            :key="index"
            class="text-[#8DA0BA] inline-flex items-center gap-1 text-sm"
        >
          <Icon name="icon-park-outline:dot" class="text-[#00FF7F]"></Icon>
          <span>{{ feature.label }}</span>
        </li>
      </ul>
    </div>

    <Separator orientation="horizontal" class="bg-[#8DA0BA]" />

    <div class="flex justify-between items-center">
      <h3 class="text-xl font-bold text-[#00FF7F]">{{ service.priceText }}</h3>

      <NuxtLink
          to="#contact"
          class="inline-flex items-center justify-center px-10 py-3 font-bold text-[#171717]
                 bg-linear-to-r from-[#00FF7F] to-[#00CC99] rounded-xl
                 transition-all duration-300 ease-in-out
                 hover:scale-105 focus-visible:scale-105 active:scale-95"
      >
        <span>{{ service.cta.label }}</span>
      </NuxtLink>
    </div>
  </article>
</template>