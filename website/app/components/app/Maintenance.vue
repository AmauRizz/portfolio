<script setup lang="ts">
import { jokeItems } from "~/contents/jokes"

const joke = ref('Chargement')

onMounted(() => {
  joke.value = jokeItems[Math.floor(Math.random() * jokeItems.length)]
})
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
    <div class="flex flex-col items-center gap-4">

      <h1 class="font-bold text-4xl text-white text-center">
        Le site revient <span class="text-brand-primary">bientôt..</span>
      </h1>

      <p class="text-custom-secondary text-lg text-center max-w-md">
        {{ joke }}
      </p>
    </div>
  </section>
</template>