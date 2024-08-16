<script setup lang="ts">
import { HeaderWelcome, FooterWelcome } from '@/widgets/layout';
</script>

<template>
  <div :class="$style.welcome_layout">
    <HeaderWelcome />
    <div :class="$style.slot">
      <slot />
    </div>
    <FooterWelcome />
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
}
</style>
