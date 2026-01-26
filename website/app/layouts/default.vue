<script setup lang="ts">
import 'vue-sonner/style.css';
import { Toaster } from '@/components/ui/sonner';

import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
    <Toaster closeButton />
    <div class="min-h-screen bg-[#070A13] scroll-smooth flex flex-col justify-between">
      <div>
        <AppHeader />
        <slot />
      </div>
      <AppFooter />
    </div>
</template>