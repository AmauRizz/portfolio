<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="flex flex-col gap-2 sm:grid sm:grid-cols-3 border-t-2 border-slate-800 items-center px-6 py-6">
      <div>
        <NuxtLink to="/#home" class="text-lg font-semibold text-white transition duration-300 ease-out hover:drop-shadow-[0_0_16px_var(--brand-primary)] focus-visible:drop-shadow-[0_0_16px_var(--brand-primary)]">
          <span class="text-brand-primary">www.</span>AmauryMulcey<span class="text-brand-primary">.fr/</span>
        </NuxtLink>
      </div>

      <div class="flex flex-col">
        <p class="justify-self-center flex flex-col justify-center items-center gap-2 text-custom-secondary text-center">
          © {{ currentYear }} Amaury Mulcey - tous droits réservés.
        </p>
        <p class="justify-self-center flex justify-center items-center gap-2 text-custom-secondary text-center">
          Fait avec <Icon name="fluent-emoji-flat:green-heart" /> à La Rochelle.
        </p>
      </div>

      <nav class="justify-self-end flex flex-col sm:flex-row text-center gap-4">
        <NuxtLink to="/terms" class="text-custom-secondary underline transition-colors duration-200 ease-out hover-text-brand-primary focus-visible-text-brand-primary">
          Mentions légales
        </NuxtLink>
        <NuxtLink to="/privacy" class="text-custom-secondary underline transition-colors duration-200 ease-out hover-text-brand-primary focus-visible-text-brand-primary">
          Politique de confidentialité
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>