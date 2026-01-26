<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import {Separator} from "~/components/ui/separator";

import type { Project } from '~/types/project'

defineProps<{
  open: boolean
  project: Project
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

      </DialogHeader>

    </DialogContent>
  </Dialog>
</template>