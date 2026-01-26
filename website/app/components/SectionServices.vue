<script setup lang="ts">
import {primaryServicesItems, secondaryServicesItems} from "~/contents/services";
</script>

<template>
  <section id="services" class="flex flex-col gap-16 mb-32 scroll-mt-28">
    <div class="flex flex-col text-center gap-2">
      <h2 class="font-bold text-5xl">Mes <span class="text-[#00FF7F]">Services</span></h2>
      <p class="text-[#8DA0BA] text-lg">Des offres adaptées à tous les budgets et tous les projets.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[3fr_1.2fr] gap-6 items-start">
      <div class="grid gap-4">
        <ServiceBigCard
            v-for="(service, index) in primaryServicesItems"
            :key="index"
            :service="service"
        />
      </div>

      <div class="flex flex-col sm:grid-cols-2 lg:flex lg:flex-col gap-6">
        <ServiceSmallCard
            v-for="(service, index) in secondaryServicesItems"
            :key="index"
            :service="service"
        />
      </div>
    </div>

  </section>
</template>