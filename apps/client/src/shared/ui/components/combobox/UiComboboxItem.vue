<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxItem, useForwardPropsEmits } from 'radix-vue'
import type { ComboboxItemEmits, ComboboxItemProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="cn('combobox-item', props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
