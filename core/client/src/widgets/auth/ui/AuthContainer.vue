<script setup lang="ts">
import { LogoFile, PrivacyPolicy } from '@/features/auth/common'
import { GoogleOauth } from '@/features/auth/oauth'
import { UiAlert } from '@/shared/ui'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()

const title = computed(() => {
  return route.name === '/auth/sign-in'
    ? t('authentication.login.title')
    : t('authentication.registration.title')
})
const info = computed(() => {
  return route.name === '/auth/sign-in'
    ? t('authentication.login.description')
    : t('authentication.registration.description')
})

const alertString = computed(() => {
  const authAlert = t('authentication.auth_alert')
  const words = authAlert.split(' ')
  words[2] = `<span style="font-weight: 600">${words[2]}</span>`
  words[7] = `<span style="font-weight: 600">${words[7]}</span>`

  return words.join(' ')
})
</script>

<template>
  <div
    class="auth-slot-container"
  >
    <div class="h-full w-full flex flex-col justify-center items-center mx-auto">
      <LogoFile />
      <div
        class="form-container"
      >
        <UiAlert
          v-if="route.name === '/auth/sign-in' || route.name === '/auth/sign-up/'"
          variant="warning"
          closable
          class="max-w-98% max-[520px]:mb-1.5"
        >
          <span class="text-sm" v-html="alertString" />
        </UiAlert>
        <h2 class="text-3xl fw-600 max-[580px]:text-2xl">
          {{ title }}
        </h2>
        <p class="text-sm pb-5 text-neutral-400 mt--1.5">
          {{ info }}
        </p>

        <slot />

        <div class="relative flex items-center justify-center uppercase py-18px text-xs">
          <div class="w-full h-0.5 bg-neutral-100 dark:bg-neutral-700" />
          <span class="px-2 text-neutral-600 whitespace-nowrap dark:text-neutral-400">{{ t('authentication.line') }}</span>
          <div class="w-full h-0.5 bg-neutral-100 dark:bg-neutral-700" />
        </div>
        <GoogleOauth />
        <PrivacyPolicy />
      </div>
    </div>
  </div>
</template>
