<script setup lang="ts">
const links = [
  { label: 'À propos', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

const isOpen = ref(false)
const isProjectsOpen = ref(false)

const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <header class="sticky top-4 z-50 mx-auto w-[95%] max-w-6xl rounded-2xl border-2 border-slate-800 bg-dark-primary backdrop-blur shadow-lg">
    <nav class="flex items-center justify-between px-4 py-3 lg:px-6">

      <!-- Logo -->
      <NuxtLink
          to="/#home"
          class="text-lg font-semibold text-white transition-all duration-300 ease-out hover:drop-shadow-[0_0_16px_var(--brand-primary)]"
      >
        <span class="text-brand-primary">www.</span>AmauryMulcey<span class="text-brand-primary">.fr/</span>
      </NuxtLink>

      <ul class="hidden lg:flex items-center gap-8">

        <li
            class="relative"
            @mouseenter="isProjectsOpen = true"
            @mouseleave="isProjectsOpen = false"
        >
          <button
              type="button"
              class="flex items-center gap-1 text-slate-300 transition-colors duration-200 hover:text-brand-primary focus-visible:text-brand-primary"
          >
            Projets
            <Icon
                name="i-heroicons-chevron-down"
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': isProjectsOpen }"
            />
          </button>

          <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
          >
            <div
                v-show="isProjectsOpen"
                class="absolute left-0 top-full mt-2 w-52 rounded-xl border border-slate-800 bg-dark-primary p-2 shadow-lg"
            >
              <NuxtLink
                  to="/#projects"
                  class="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-900 hover:text-brand-primary"
              >
                Projets
              </NuxtLink>
              <NuxtLink
                  to="/projects"
                  class="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-900 hover:text-brand-primary"
              >
                Tous mes projets
              </NuxtLink>
            </div>
          </Transition>
        </li>

        <!-- Liens simples -->
        <li v-for="link in links" :key="link.href">
          <NuxtLink
              :to="link.href"
              class="text-slate-300 transition-colors duration-200 hover:text-brand-primary focus-visible:text-brand-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Burger mobile -->
      <button
          type="button"
          class="lg:hidden cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-700 bg-dark-primary/80 p-2 text-slate-100 transition-all duration-200 hover:border-brand-primary hover:text-brand-primary"
          :aria-expanded="isOpen"
          @click="toggleMenu"
      >
        <Icon v-if="!isOpen" name="i-heroicons-bars-3" class="h-6 w-6" />
        <Icon v-else name="i-heroicons-x-mark" class="h-6 w-6" />
      </button>

      <!-- CTA desktop -->
      <NuxtLink
          to="/#contact"
          class="hidden lg:inline-flex items-center justify-center px-10 py-3 font-bold text-custom-button bg-gradient-brand rounded-xl transition-all duration-300 ease-in-out hover:scale-105 focus-visible:scale-105 active:scale-95"
      >
        Me Contacter
      </NuxtLink>
    </nav>

    <!-- Menu mobile -->
    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-show="isOpen"
          class="absolute left-0 right-0 top-full mt-2 px-4 py-4 flex flex-col gap-4 lg:hidden rounded-2xl border border-slate-800/80 bg-dark-primary shadow-lg"
      >
        <nav class="space-y-1">
          <div class="space-y-1">
            <span class="block rounded-xl px-3 py-2 text-sm font-medium text-slate-400">
              Projets
            </span>
            <NuxtLink
                to="/#projects"
                class="block rounded-xl px-6 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-brand-primary"
                @click="closeMenu"
            >
              Tous les projets
            </NuxtLink>
            <NuxtLink
                to="/projects"
                class="block rounded-xl px-6 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-brand-primary"
                @click="closeMenu"
            >
              Page projets
            </NuxtLink>
          </div>

          <NuxtLink
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              class="block rounded-xl px-3 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-brand-primary"
              @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <NuxtLink
            to="/#contact"
            class="w-full inline-flex items-center justify-center px-10 py-3 font-bold text-custom-button bg-gradient-brand rounded-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            @click="closeMenu"
        >
          Me Contacter
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>