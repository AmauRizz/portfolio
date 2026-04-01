<script setup lang="ts">
const jokes = [
  "Le temps que je règle mon git push -f en prod.",
  "En tout cas ça marchait en local, je comprends pas.",
  "J'ai delete la mauvaise branche.",
  "C'était le rm -rf de trop.",
  "Claude était en maintenance aussi...",
  "J'ai refactorisé un truc qui marchait.",
]
const getJoke = jokes[Math.floor(Math.random() * jokes.length)]
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen gap-8 px-4">
    <div class="flex flex-col items-center gap-4">

      <h1 class="font-bold text-4xl text-white text-center">
        Le site revient <span class="text-brand-primary">bientôt..</span>
      </h1>

      <p class="text-custom-secondary text-lg text-center max-w-md">
        {{ getJoke }}
      </p>
    </div>
  </section>
</template>