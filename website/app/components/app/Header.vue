<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

const links = [
    { label: 'À propos', href: '/#about' },
    { label: 'Services', href: '/#services' },
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
      class="sticky top-4 z-50 mx-auto w-[95%] max-w-6xl rounded-2xl border-2 border-slate-800 bg-dark-primary backdrop-blur shadow-lg"
  >
    <nav class="flex items-center justify-between px-4 py-3 lg:px-6">
      <NuxtLink to="/#home"
                class="text-lg font-semibold text-white
                transition-all duration-300 ease-out
                hover:drop-shadow-[0_0_16px_var(--brand-primary)] focus-visible:drop-shadow-[0_0_16px_var(--brand-primary)]"
      >
        <span class="text-brand-primary">www.</span>AmauryMulcey<span class="text-brand-primary">.fr/</span>
      </NuxtLink>

      <NavigationMenu class="hidden lg:block">
        <NavigationMenuList class="flex gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger
                class="text-slate-300 transition-all duration-200 ease-out hover:text-brand-primary focus-visible:text-brand-primary"
            >
              Projets
            </NavigationMenuTrigger>

            <NavigationMenuContent
                class="rounded-xl border border-slate-800 bg-dark-primary p-3 shadow-lg"
            >
              <ul class="flex w-[220px] flex-col gap-1">

                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                        to="/#projects"
                        class="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-brand-primary"
                    >
                      Tous les projets
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                        to="/projects"
                        class="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-brand-primary"
                    >
                      Page projets
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>

              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem
              v-for="link in links"
              :key="link.href"
          >
            <NavigationMenuLink as-child>
              <NuxtLink
                  :to="link.href"
                  class="text-slate-300 transition-all duration-200 ease-out hover:text-brand-primary focus-visible:text-brand-primary"
              >
                {{ link.label }}
              </NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <button
          type="button"
          class="lg:hidden cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-700 bg-dark-primary/80 p-2 text-slate-100
          transition-all duration-200 ease-out
          hover-border-brand-primary hover-text-brand-primary focus-visible-border-brand-primary focus-visible-text-brand-primary"
          :aria-expanded="isOpen"
          @click="toggleMenu"
      >
        <Icon v-if="!isOpen" name="i-heroicons-bars-3" class="h-6 w-6" />
        <Icon v-else name="i-heroicons-x-mark" class="h-6 w-6" />
      </button>

      <NuxtLink
          to="/#contact"
          class="hidden lg:inline-flex items-center justify-center px-10 py-3 font-bold text-custom-button
          bg-gradient-brand rounded-xl
          transition-all duration-300 ease-in-out
          hover:scale-105 focus-visible:scale-105 active:scale-95"
      >
        Me Contacter
      </NuxtLink>
    </nav>

    <div
        v-show="isOpen"
        class="absolute left-0 right-0 top-full mt-2 px-4 py-4 flex flex-col gap-4 lg:hidden rounded-2xl border border-slate-800/80 bg-dark-primary shadow-lg overflow-hidden"
    >
      <nav class="space-y-1">
        <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="block rounded-xl px-3 py-2 text-sm font-medium text-slate-100
            transition-all duration-200 ease-out
            hover:bg-slate-900 hover-text-brand-primary focus-visible:bg-slate-900 focus-visible-text-brand-primary"
            @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink
          to="/#contact"
          class="w-full inline-flex items-center justify-center px-10 py-3 font-bold text-custom-button
                bg-gradient-brand rounded-xl
                transition-all duration-300 ease-in-out
                hover:scale-105 focus-visible:scale-105 active:scale-95"
          @click="closeMenu"
      >
        Me Contacter
      </NuxtLink>
    </div>
  </header>
</template>
