<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Separator} from "~/components/ui/separator";

import type { Skill } from '@/types/skill'

defineProps<{
  open: boolean
  skill: Skill
}>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()
</script>

<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent
        class="text-[#F3F7FB] flex flex-col gap-6 px-6 py-6
        bg-linear-to-br from-[#111727] to-[#0A0F1C] border-2 border-slate-800 rounded-xl
        transition-all duration-200 ease-out
        hover:scale-102"
    >
      <DialogHeader class="flex flex-col gap-2">
        <h3 class="font-bold inline-flex items-center gap-2 text-2xl"><Icon :name="skill.icon" class="text-4xl"/>{{ skill.name }}</h3>
        <p class="text-[#8DA0BA]">{{ skill.description }}</p>
      </DialogHeader>

      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-4">
          <Separator orientation="horizontal" class="bg-[#8DA0BA]" />
          <div class="flex flex-col gap-4">
            <div>
              <h4 class="font-bold mb-2">Utilisation</h4>

              <p class="text-sm text-[#8DA0BA]">
                {{ skill.usage }}
              </p>
            </div>

            <ul class="flex flex-col gap-2 text-sm text-[#8DA0BA]">
              <li v-for="item in skill.skills"
                  :key="item"
                  class="inline-flex items-center gap-2"
              >
                <Icon name="icon-park-outline:dot" class="text-[#00FF7F]" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <NuxtLink
          :to="skill.link"
          target="_blank"
          class="gap-2 text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-3
                border-2 border-[#00FF7F] rounded-xl
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-[#00FF7F] hover:text-[#171717]
                focus-visible::scale-105 focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]
                active:scale-95"
      >
        <span>Site Internet</span>
        <span class="inline-flex items-center">
          <Icon name="mdi:external-link" class="inline-flex items-center" />
        </span>
      </NuxtLink>

    </DialogContent>
  </Dialog>
</template>