<script setup lang="ts">
useHead({
  title: 'Amaury Mulcey | Mentions Légales',
  meta: [
    { name: 'description', content: 'Mentions légales du site Amaury Mulcey. Informations sur l’éditeur du site, l’hébergement, la responsabilité et les conditions d’utilisation.' },

    { property: 'og:title', content: 'Amaury Mulcey | Portfolio - Mentions Légales' },
    { property: 'og:description', content: 'Mentions légales du site Amaury Mulcey. Informations sur l’éditeur du site, l’hébergement, la responsabilité et les conditions d’utilisation.' },
    { property: 'og:url', content: 'https://www.amaurymulcey.fr/terms' },
    { property: 'og:image', content: 'https://www.amaurymulcey.fr/web-app-manifest-512x512.png' },

    { name: 'twitter:title', content: 'Amaury Mulcey | Portfolio - Mentions Légales' },
    { name: 'twitter:description', content: 'Mentions légales du site Amaury Mulcey. Informations sur l’éditeur du site, l’hébergement, la responsabilité et les conditions d’utilisation.' },
    { name: 'twitter:image', content: 'https://www.amaurymulcey.fr/web-app-manifest-512x512.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'theme-color', content: '#00FF7F' },

    { name: 'robots', content: 'noindex, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.amaurymulcey.fr/terms' }
  ]
})
</script>

<template>
  <main class="bg-[#070A13] text-[#F3F7FB] flex flex-col gap-6 pt-20 pb-20 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
    <NuxtLink to="/" class="inline-flex items-center gap-2 underline transition-colors duration-200 ease-out hover:text-[#00FF7F]"> <Icon name="ep:back" /> Retour a la Page d'accueil</NuxtLink>
    <div>
      <h1 class="font-bold text-3xl sm:text-4xl">Mentions Légales</h1>
      <p class="text-sm sm:text-base">Dernière mise à jour le 09/01/2026</p>
    </div>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Éditeur du site</h2>
      <p class="text-sm sm:text-base">
        Le site est edité par Amaury Mulcey
      </p>
      <ul class="list-disc ml-5 text-sm sm:text-base">
        <li>Statut juridique : Entrepreneur individuel</li>
        <li>
          Contact :
          <NuxtLink to="mailto:amaury.mulcey.pro@gmail.com" class="underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">amaury.mulcey.pro@gmail.com</NuxtLink>
        </li>
        <li>SIRET : 94030008000014</li>
        <li>Directeur de la publication : Amaury Mulcey</li>
      </ul>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Hébergeur</h2>
      <p class="text-sm sm:text-base">Le site est hébergé par la société OVH SAS</p>
      <ul class="list-disc ml-5 text-sm sm:text-base">
        <li>Adresse : 2 rue Kellermann, 59100 Roubaix, France</li>
        <li>
          Contact :
          <NuxtLink to="mailto:Support@ovh.com" class="underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">Support@ovh.com</NuxtLink>
          /
          <NuxtLink to="tel:+33972101007" class="underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">+33 9 72 10 10 07</NuxtLink>
        </li>
      </ul>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Propriété intellectuelle</h2>
      <p class="text-sm sm:text-base">
        Tout le contenu du site (textes, images, vidéos, graphismes) est protégé par les lois françaises et internationales sur la propriété intellectuelle.
        Les icônes utilisées proviennent de Nuxt Icon et sont soumises à leur licence respective. Toute reproduction ou utilisation non autorisée du contenu du site est interdite.
      </p>
      <p class="text-sm sm:text-base">
        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable.
      </p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Responsabilité</h2>
      <p class="text-sm sm:text-base">
        L’éditeur s’efforce de fournir des informations exactes sur le site, mais ne peut garantir leur exhaustivité ou leur actualité. L’éditeur décline toute responsabilité pour tout dommage direct ou indirect lié à l’utilisation du site.
      </p>
    </article>
  </main>
</template>