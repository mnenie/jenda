<script setup lang="ts">
import { BgPanel, LogoFile } from '@/features/auth/common'
</script>

<template>
  <div class="h-dvh w-full flex relative">
    <LogoFile />
    <slot />
    <BgPanel />
  </div>
</template>
