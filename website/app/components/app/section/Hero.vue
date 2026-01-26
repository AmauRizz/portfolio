<script setup lang="ts">

</script>

<template>
  <section id="home" class="flex flex-col gap-16 sm:mt-24 mb-32 scroll-mt-64">
    <div class="flex flex-col items-center gap-4">
      <NuxtPicture
          src="images/pdp.jpeg"
          class="rounded-full overflow-hidden border-4 border-[#00FF7F] drop-shadow-[0_0_12px_#00FF7F] w-32 h-32 object-cover"
          :imgAttrs="{
              alt: 'Image de profil',
            }"
      />
      <div class="flex flex-col gap-8">
        <div class="flex flex-col">
          <h1 class="font-bold text-4xl text-center mb-1">
            Bonjour! Je suis <span class="text-[#00FF7F]">Amaury</span>
          </h1>
          <h2 class="text-[#00FF7F] font-bold text-center mb-6">Étudiant et Freelance</h2>
          <p class="text-[#8DA0BA] text-lg text-center">
            Développeur full-stack motivé par la curiosité et la création. Je construis des projets qui
            m’inspirent et parfois, aident les autres à donner vie à leurs idées aussi.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <NuxtLink
              to="#services"
              class="inline-flex items-center justify-center px-10 py-3 font-bold text-[#171717]
                 bg-linear-to-r from-[#00FF7F] to-[#00CC99] rounded-xl
                 transition-all duration-300 ease-in-out
                 hover:scale-105 focus-visible:scale-105 active:scale-95"
          >
            <span>Mes Services</span>
          </NuxtLink>

          <!--
                      <NuxtLink
                          to="https://api.amaurymulcey.fr"
                          target="_blank"
                          class="gap-2 text-[#00FF7F] font-bold inline-flex items-center justify-center px-10 py-3
                                border-2 border-[#00FF7F] rounded-xl
                                transition-all duration-300 ease-in-out
                                hover:scale-105 hover:bg-[#00FF7F] hover:text-[#171717]
                                focus-visible::scale-105 focus-visible:bg-[#00FF7F] focus-visible:text-[#171717]
                                active:scale-95"
                      >
                        <span>Discover my api's</span>
                        <span class="inline-flex items-center">
                          <Icon name="mdi:external-link" />
                        </span>
                      </NuxtLink>
          -->
          <NuxtLink
              href="https://buymeacoffee.com/amaurizz"
              target="_blank"
              class="gap-2 text-[#FFFF00] font-bold inline-flex items-center justify-center px-10 py-3
                border-2 border-[#FFFF00] rounded-xl
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-[#FFFF00] hover:text-[#171717]
                focus-visible:scale-105 focus-visible:bg-[#FFFF00] focus-visible:text-[#171717]
                active:scale-95"
          >
              <span class="inline-flex items-center">
                <Icon name="simple-icons:buymeacoffee" />
              </span>
            <span>Me Soutenir</span>
            <span class="inline-flex items-center">
                <Icon name="mdi:external-link" />
              </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>