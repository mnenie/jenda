<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxTrigger, useForwardProps } from 'radix-vue'
import type { ComboboxTriggerProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ComboboxTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxTrigger
    v-bind="forwarded"
    :class="cn('', props.class)"
    tabindex="0"
  >
    <slot />
  </ComboboxTrigger>
</template>
