<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import TableCell from './UiTableCell.vue'
import TableRow from './UiTableRow.vue'
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
          'table-empty-cell',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <div class="table-empty">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
