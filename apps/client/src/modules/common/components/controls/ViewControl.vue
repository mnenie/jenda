<script setup lang="ts">
import { UiTabs, UiTabsContent } from '@/shared/ui'
</script>

<template>
  <UiTabs
    :default-value="$route.name === 'notes' ? 'cards' : 'table'"
    class="w-full h-full flex flex-col gap-12px"
  >
    <slot />
    <UiTabsContent class="h-full" value="table">
      <slot name="table" />
    </UiTabsContent>
    <UiTabsContent value="cards">
      <slot name="cards" />
    </UiTabsContent>
  </UiTabs>
</template>
