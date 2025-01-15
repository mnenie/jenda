<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { SelectSeparator, type SelectSeparatorProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<SelectSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectSeparator
    v-bind="delegatedProps"
    :class="cn(
      'select-separator',
      props.class,
    )"
  />
</template>
