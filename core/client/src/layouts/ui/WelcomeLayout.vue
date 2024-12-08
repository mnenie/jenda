<script setup lang="ts">
import { AppFooter, HeaderWelcome } from '@/widgets/layout'
import { useColorMode } from '@vueuse/core'

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
