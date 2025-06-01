<script setup lang="ts">
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#262626' : '#ffffff')

const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.title'),
  titleTemplate: '%s',
})

useHead({
  title: () => t('seo.title'),
  meta: [
    { key: 'theme', name: 'theme', content: color },
  ],
})

if (import.meta.server) {
  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
    ],
  })
  useSeoMeta({
    ogSiteName: 'Jenda',
    ogType: 'website',
  })
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
