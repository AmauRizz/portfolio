<script setup lang="ts">
const links = [
    { label: 'Projets', href: '/#projects' },
    { label: 'À propos', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
]

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header
      class="sticky top-4 z-50 mx-auto w-[95%] max-w-6xl rounded-2xl border-2 border-slate-800 bg-[#050816]/80 backdrop-blur shadow-lg"
  >
    <nav class="flex items-center justify-between px-4 py-3 lg:px-6">
      <NuxtLink to="/website/public#home"
                class="text-lg font-semibold text-white
                transition-all duration-300 ease-out
                hover:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)] focus-visible:drop-shadow-[0_0_16px_rgba(0,255,127,0.5)]"
      >
        <span class="text-[#00FF7F]">www.</span>AmauryMulcey<span class="text-[#00FF7F]">.fr/</span>
      </NuxtLink>

      <div class="hidden items-center gap-8 text-sm font-medium lg:flex">
        <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="text-slate-300 transition-all duration-200 ease-out hover:text-[#00FF7F] focus-visible:text-[#00FF7F]"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <button
          type="button"
          class="lg:hidden cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-100
          transition-all duration-200 ease-out
          hover:border-[#00FF7F] hover:text-[#00FF7F]focus-visible:border-[#00FF7F] focus-visible:text-[#00FF7F]"
          :aria-expanded="isOpen"
          @click="toggleMenu"
      >
        <Icon v-if="!isOpen" name="i-heroicons-bars-3" class="h-6 w-6" />
        <Icon v-else name="i-heroicons-x-mark" class="h-6 w-6" />
      </button>

      <NuxtLink
          to="/website/public#contact"
          class="hidden lg:inline-flex items-center justify-center px-10 py-3 font-bold text-[#171717]
          bg-gradient-to-r from-[#00FF7F] to-[#00CC99] rounded-xl
          transition-all duration-300 ease-in-out
          hover:scale-105 focus-visible:scale-105 active:scale-95"
      >
        Me Contacter
      </NuxtLink>
    </nav>

    <div
        v-show="isOpen"
        class="absolute left-0 right-0 top-full mt-2 px-4 py-4 flex flex-col gap-4 lg:hidden rounded-2xl border border-slate-800/80 bg-[#050816] shadow-lg overflow-hidden"
    >
      <nav class="space-y-1">
        <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="block rounded-xl px-3 py-2 text-sm font-medium text-slate-100
            transition-all duration-200 ease-out
            hover:bg-slate-900 hover:text-[#00FF7F] focus-visible:bg-slate-900 focus-visible:text-[#00FF7F]"
            @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink
          to="/website/public#contact"
          class="w-full inline-flex items-center justify-center px-10 py-3 font-bold text-[#171717]
                bg-gradient-to-r from-[#00FF7F] to-[#00CC99] rounded-xl
                transition-all duration-300 ease-in-out
                hover:scale-105 focus-visible:scale-105 active:scale-95"
          @click="closeMenu"
      >
        Me Contacter
      </NuxtLink>
    </div>
  </header>
</template>
