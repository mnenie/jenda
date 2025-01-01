<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxEmpty } from 'radix-vue'
import type { ComboboxEmptyProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxEmpty
    v-bind="delegatedProps"
    :class="cn(
      'command-empty',
      props.class,
    )"
  >
    <slot />
  </ComboboxEmpty>
</template>
