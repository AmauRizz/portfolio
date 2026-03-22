<script setup>
const config = useRuntimeConfig()
const layout = config.public.isMaintenance ? 'maintenance' : 'default'
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="layout" />
</template>
