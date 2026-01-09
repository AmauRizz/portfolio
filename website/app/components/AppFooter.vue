<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="flex flex-col gap-2 sm:grid sm:grid-cols-3 border-t border-slate-800 items-center px-6 py-6">
      <div>
        <NuxtLink to="/#home" class="text-lg font-semibold text-white transition duration-300 ease-out hover:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)]">
          <span class="text-[#00FF7F]">www.</span>AmauryMulcey<span class="text-[#00FF7F]">.fr/</span>
        </NuxtLink>
      </div>

      <div class="flex flex-col">
        <p class="justify-self-center flex flex-col justify-center items-center gap-2 text-[#8DA0BA] text-center">
          © {{ currentYear }} Amaury Mulcey - tous droits réservés.
        </p>
        <p class="justify-self-center flex justify-center items-center gap-2 text-[#8DA0BA] text-center">
          Fait avec <Icon name="fluent-emoji-flat:green-heart" /> à La Rochelle.
        </p>
      </div>

      <nav class="justify-self-end flex flex-col sm:flex-row text-center gap-4">
        <NuxtLink to="/terms" class="text-[#8DA0BA] underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">
          Mentions légales
        </NuxtLink>
        <NuxtLink to="/privacy" class="text-[#8DA0BA] underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">
          Politique de confidentialité
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>