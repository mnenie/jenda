<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue'

const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    class="collapsible-content"
  >
    <slot />
  </CollapsibleContent>
</template>
