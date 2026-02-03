<script setup lang="ts">
import 'vue-sonner/style.css';
import {Toaster} from "~/components/ui/sonner";

const {
  activeModal,
  selectedSkill,
  toggleModal
} = useModal()
</script>

<template>
  <AppStarfieldBackground />

  <div class="min-h-screen bg-transparent scroll-smooth flex flex-col justify-between relative z-0">
    <div>
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
  </div>

  <SkillModal
      v-if="activeModal === 'skill' && selectedSkill"
      :open="true"
      :skill="selectedSkill"
      @update:open="() => toggleModal('skill', null)"
  />

  <Toaster closeButton />
</template>