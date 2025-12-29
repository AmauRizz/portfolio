<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <main>
    <h1>Error: {{ error?.statusCode }}</h1>
  </main>
</template>