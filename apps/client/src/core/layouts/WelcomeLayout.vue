<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import HeaderWelcome from '../components/headers/HeaderWelcome.vue'
import AppFooter from '../components/footer/AppFooter.vue'

useColorMode({
  initialValue: 'light',
})
</script>

<template>
  <div class="relative min-h-dvh w-full flex flex-col">
    <HeaderWelcome />
    <div class="flex-1">
      <slot />
    </div>
    <div class="flex justify-center">
      <AppFooter />
    </div>
  </div>
</template>
