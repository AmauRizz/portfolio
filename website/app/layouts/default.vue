<script setup lang="ts">

</script>

<template>
  <div class="scroll-smooth min-h-screen flex flex-col justify-between">
    <div>
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>

</style>