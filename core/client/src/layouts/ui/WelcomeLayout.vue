<script setup lang="ts">
import { AppFooter, HeaderWelcome } from '@/widgets/layout'
import { useColorMode } from '@vueuse/core'

useColorMode({
  initialValue: 'light',
})
</script>

<template>
  <div :class="$style.welcome_layout">
    <HeaderWelcome />
    <div :class="$style.slot">
      <slot />
    </div>
    <div :class="$style.footer_wrapper">
      <AppFooter />
    </div>
  </div>
</template>

<style module lang="scss">
.welcome_layout {
  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .slot {
    flex: 1 1 0%;
  }

  .footer_wrapper{
    display: flex;
    justify-content: center;
  }
}
</style>
