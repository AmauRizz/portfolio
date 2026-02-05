<script setup lang="ts">

</script>

<template>
  <section id="home" class="flex flex-col gap-16 sm:mt-24 mb-32 scroll-mt-64">
    <div class="flex flex-col items-center gap-4">
      <div class="relative">
        <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brand-primary drop-shadow-[0_0_12px_var(--brand-primary)]">
          <NuxtImg
              src="/assets/images/pdp.jpeg"
              alt=""
              width="160" height="160"
              sizes="128px md:160px"
              format="webp"
              densities="1x 2x"
              preload
              class="rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 object-cover"
          />
        </div>
        <div class="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <NuxtLink
              href="https://buymeacoffee.com/amaurizz"
              target="_blank"
              class="text-black font-bold inline-flex items-center justify-center px-3 py-3
                bg-brand-accent rounded-full
                transition-all duration-300 ease-in-out
                hover:scale-105
                focus-visible:scale-105
                active:scale-95"
              title="Retrouvez-moi sur Tinder"
          >
              <span class="inline-flex items-center gap-2">
                <Icon name="simple-icons:buymeacoffee" class="text-xl -rotate-z-10" />
              </span>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col">
          <h1 class="font-bold text-4xl text-center mb-1">
            Bonjour! Je suis <span class="text-brand-primary">Amaury</span>
          </h1>
          <h2 class="text-brand-primary font-bold text-center mb-6">Étudiant et Freelance</h2>
          <p class="text-custom-secondary text-lg text-center">
            Développeur full-stack motivé par la curiosité et la création. Je construis des projets qui
            m’inspirent et parfois, aident les autres à donner vie à leurs idées aussi.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
          <NuxtLink
              to="/#services"
              class="inline-flex items-center justify-center px-10 py-3 font-bold text-custom-button
                 bg-gradient-brand rounded-xl
                 transition-all duration-300 ease-in-out
                 hover:scale-105 focus-visible:scale-105 active:scale-95"
          >
            <span>Mes Services</span>
          </NuxtLink>

          <NuxtLink
              to="/#contact"
              class="inline-flex items-center justify-center px-10 py-3 font-bold
                   text-brand-primary border-2 border-[#00FF7F] rounded-xl
                     transition-all duration-300 ease-in-out
                     hover:bg-[#00FF7FFF] hover:text-[#171717FF] active:scale-95"
                    >
            <span>Me Contacter</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>