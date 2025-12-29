<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-[#070A13] scroll-smooth">
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </UApp>
</template>