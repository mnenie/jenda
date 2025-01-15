<script setup lang="ts">
import BgPanel from '@/modules/auth/components/common/BgPanel.vue'
import LogoFile from '@/modules/auth/components/common/LogoFile.vue'
</script>

<template>
  <div class="h-dvh w-full flex relative">
    <LogoFile />
    <slot />
    <BgPanel />
  </div>
</template>
