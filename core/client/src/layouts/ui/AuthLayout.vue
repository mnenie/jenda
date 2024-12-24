<script setup lang="ts">
import { BgPanel } from '@/features/auth/common'
</script>

<template>
  <div class="h-dvh w-full flex">
    <slot />
    <BgPanel />
  </div>
</template>
