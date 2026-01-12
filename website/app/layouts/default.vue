<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

import 'vue-sonner/style.css';
import { Toaster } from '@/components/ui/sonner';
</script>

<template>
    <Toaster closeButton />
    <div class="min-h-screen bg-[#070A13] scroll-smooth">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>