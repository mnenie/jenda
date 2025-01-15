<script setup lang="ts">
import { useEmitAsProps } from 'radix-vue'
import { UiPopover, UiPopoverContent, UiPopoverTrigger } from '..'
import type { PopoverRootEmits, PopoverRootProps } from 'radix-vue'

const props = defineProps<PopoverRootProps>()
const emits = defineEmits<PopoverRootEmits>()
</script>

<template>
  <UiPopover
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
  >
    <UiPopoverTrigger>
      Open popover
    </UiPopoverTrigger>
    <UiPopoverContent>
      Some popover content
    </UiPopoverContent>
  </UiPopover>
</template>
