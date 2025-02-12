<script setup lang="ts">
import { type CollapsibleRootEmits, type CollapsibleRootProps, useEmitAsProps } from 'radix-vue'
import { UiCollapsible, UiCollapsibleContent, UiCollapsibleTrigger } from '..'

const props = defineProps<CollapsibleRootProps>()
const emits = defineEmits<CollapsibleRootEmits>()
</script>

<template>
  <UiCollapsible
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
  >
    <UiCollapsibleTrigger>
      trigger
    </UiCollapsibleTrigger>
    <UiCollapsibleContent>
      content
    </UiCollapsibleContent>
  </UiCollapsible>
</template>
