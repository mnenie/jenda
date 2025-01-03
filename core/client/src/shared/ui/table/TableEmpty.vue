<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import TableCell from './TableCell.vue'
import TableRow from './TableRow.vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  colspan?: number
}>(), {
  colspan: 1,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TableRow>
    <TableCell
      :class="
        cn(
          'whitespace-nowrap align-middle text-sm text-neutral-950 dark:text-neutral-50',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <div class="flex items-center justify-center text-sm text-neutral-500">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
