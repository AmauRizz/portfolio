<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen bg-[#070A13] scroll-smooth flex flex-col justify-between">
      <div>
        <AppHeader />
        <slot />
      </div>
      <AppFooter />
    </div>
</template>