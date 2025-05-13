<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxAnchor, useForwardProps } from 'radix-vue'
import type { ComboboxAnchorProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ComboboxAnchorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxAnchor
    v-bind="forwarded"
    :class="cn('combobox-anchor', props.class)"
  >
    <slot />
  </ComboboxAnchor>
</template>
