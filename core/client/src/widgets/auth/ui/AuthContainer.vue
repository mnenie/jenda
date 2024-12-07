<script setup lang="ts">
import { GoogleOauth, PrivacyPolicy } from '@/features/auth'
import { RouteNames } from '@/shared/config/consts'
import { UiAlert } from '@/shared/ui'
import { useDark, useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()
const { width } = useWindowSize()

const isDark = useDark()

const isWarningOpen = ref(true)

const title = computed(() => {
  return route.name === RouteNames.login
    ? t('authentication.login.title')
    : t('authentication.registration.title')
})
const info = computed(() => {
  return route.name === RouteNames.login
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
    class="relative h-full w-68% mx-auto px-2rem dark:bg-#1c1c1c
    max-[1440px]:w-80% max-[1100px]:!w-full"
  >
    <div class="h-full w-full flex flex-col justify-center items-center mx-auto">
      <div
        v-if="width > 1100"
        class="absolute top-24px left-32px flex items-center gap-1.5 cursor-pointer"
        @click="$router.push({ name: RouteNames.welcome })"
      >
        <img
          :src="isDark ? '/icons/kanban-dark.png' : '/icons/kanban.png'"
          class="w-7 h-7"
        />
        <h3 class="text-xl !fw-500">
          Jenda
        </h3>
      </div>
      <div
        v-else
        class="absolute left-150px top-30px flex items-center gap-1.5 cursor-pointer max-w-700px
        max-[890px]:left-80px max-[580px]:!left-20px max-[520px]:(!left-15px !top-15px)"
      >
        <div
          class="flex items-center gap-1"
          @click="$router.push({ name: RouteNames.welcome })"
        >
          <div
            i-lucide-chevron-left
            class="text-lg text-neutral-500"
          />
          <span class="text-sm mt-1 !fw-500">
            {{ t('authentication.back') }}
          </span>
        </div>
      </div>
      <div
        class="relative flex w-460px flex-col gap-2
          max-[520px]:!w-full max-[1100px]:!w-460px max-[1200px]:w-360px"
      >
        <UiAlert
          v-if="isWarningOpen"
          variant="warning"
          closable
          class="max-w-98% max-[520px]:mb-1.5"
          @close="isWarningOpen = false"
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
