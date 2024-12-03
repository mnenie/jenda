<script setup lang="ts">
import { AppLayout } from '@/layouts'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import { Toaster } from 'vue-sonner'

type ToasterTheme = 'dark' | 'light'

const isDark = useDark()

const toasterTheme = computed<ToasterTheme>(() => {
  return isDark.value ? 'dark' : 'light'
})
</script>

<template>
  <AppLayout>
    <router-view v-slot="{ Component }">
      <keep-alive :include="['LoginPage', 'RegistrationPage']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </AppLayout>
  <Toaster :theme="toasterTheme" position="bottom-right" />
</template>
