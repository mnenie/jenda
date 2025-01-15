<script setup lang="ts">
import { UiTabs, UiTabsContent } from '@/shared/ui'
</script>

<template>
  <UiTabs class="w-full h-full" default-value="table">
    <slot />
    <UiTabsContent class="h-full" value="table">
      <slot name="table" />
    </UiTabsContent>
    <UiTabsContent value="cards">
      <slot name="cards" />
    </UiTabsContent>
  </UiTabs>
</template>
