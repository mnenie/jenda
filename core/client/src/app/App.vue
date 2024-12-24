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
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="['sign-in', 'sign-up']">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </AppLayout>
  <Toaster :theme="toasterTheme" :expand="true" position="bottom-right" />
</template>
