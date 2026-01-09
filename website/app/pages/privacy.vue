<script setup lang="ts">
useHead({
  title: 'Amaury Mulcey | Politique de confidentialité',
  meta: [
    { name: 'description', content: 'Politique de confidentialité du site Amaury Mulcey. Détails sur la collecte des données, les cookies, le RGPD et les droits des utilisateurs.' },

    { property: 'og:title', content: 'Amaury Mulcey | Portfolio - Politique de confidentialité' },
    { property: 'og:description', content: 'Politique de confidentialité du site Amaury Mulcey. Détails sur la collecte des données, les cookies, le RGPD et les droits des utilisateurs.' },
    { property: 'og:url', content: 'https://www.amaurymulcey.fr/privacy' },
    { property: 'og:image', content: 'https://www.amaurymulcey.fr/web-app-manifest-512x512.png' },

    { name: 'twitter:title', content: 'Amaury Mulcey | Portfolio - Politique de confidentialité' },
    { name: 'twitter:description', content: 'Politique de confidentialité du site Amaury Mulcey. Détails sur la collecte des données, les cookies, le RGPD et les droits des utilisateurs.' },
    { name: 'twitter:image', content: 'https://www.amaurymulcey.fr/web-app-manifest-512x512.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'theme-color', content: '#00FF7F' },

    { name: 'robots', content: 'noindex, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.amaurymulcey.fr/privacy' }
  ]
})
</script>

<template>
  <main class="bg-[#070A13] text-[#F3F7FB] flex flex-col gap-6 pt-20 pb-20 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
    <NuxtLink to="/" class="inline-flex items-center gap-2 underline transition-colors duration-200 ease-out hover:text-[#00FF7F]"> <Icon name="ep:back" /> Retour a la Page d'accueil</NuxtLink>
    <div>
      <h1 class="font-bold text-3xl sm:text-4xl">Politique de Confidentialité</h1>
      <p class="text-sm sm:text-base">Dernière mise à jour le 09/01/2026</p>
    </div>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Introduction</h2>
      <p class="text-sm sm:text-base">
        La présente politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons, traitons et protégeons vos données personnelles lorsque vous utilisez le site web Amaury Mulcey (le « Site »), accessible à l'adresse
        <NuxtLink to="/" class="underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">https://amaurymulcey.fr</NuxtLink>.
      </p>
      <p class="text-sm sm:text-base">
        Nous nous engageons à respecter la confidentialité de vos données personnelles et à respecter la législation en vigueur en matière de protection des données, notamment le Règlement Général sur la Protection des Données (RGPD).
      </p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Collecte des données</h2>
      <p class="text-sm sm:text-base">Le site collecte les informations suivantes via le formulaire de contact : nom, email et message.</p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Finalité</h2>
      <p class="text-sm sm:text-base">Ces données sont utilisées uniquement pour répondre à vos demandes et ne seront jamais vendues ni partagées avec des tiers.</p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Durée de conservation</h2>
      <p class="text-sm sm:text-base">
        Le site ne conserve pas directement les informations saisies dans le formulaire. Cependant, vos données (nom, email, message) peuvent être temporairement traitées ou stockées par des services tiers utilisés pour l’envoi des emails (par exemple Gmail, NodeMailer ou d’autres services d’emailing). La durée de conservation de ces données dépend donc des politiques de ces services.
      </p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Accès et droits des utilisateurs</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base">
        <li>Droit d’accès : Vous pouvez obtenir une copie des données personnelles que nous détenons à votre sujet.</li>
        <li>Droit de rectification : Vous pouvez demander à ce que vos données personnelles soient corrigées si elles sont inexactes ou incomplètes.</li>
        <li>Droit à l’effacement : Vous pouvez demander la suppression de vos données personnelles, sous réserve des obligations légales de conservation.</li>
        <li>Droit d’opposition : Vous pouvez vous opposer à tout moment au traitement de vos données personnelles, dans les conditions prévues par la loi.</li>
      </ul>
      <p class="text-sm sm:text-base">
        Pour exercer ces droits, vous pouvez nous contacter à l’adresse suivante :
        <NuxtLink to="mailto:amaurymulcey.pro@gmail.com" class="underline transition-colors duration-200 ease-out hover:text-[#00FF7F]">amaurymulcey.pro@gmail.com</NuxtLink>
      </p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Cookies</h2>
      <p class="text-sm sm:text-base">
        Le site n’utilise pas de cookies, sauf ceux strictement nécessaires au fonctionnement du formulaire.
      </p>
    </article>

    <article>
      <h2 class="font-bold text-lg sm:text-xl">Modifications de la politique de confidentialité</h2>
      <p class="text-sm sm:text-base">
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons via une notification sur le Site ou par e-mail.
        Nous vous encourageons à consulter régulièrement cette politique pour rester informé de toute mise à jour.
      </p>
    </article>
  </main>
</template>