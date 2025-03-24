<script setup lang="ts" generic="T extends Omit<Column, 'cards'>">
import { animations } from '@formkit/drag-and-drop'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import ColumnItem from './columns/ColumnItem.vue'
import CardItem from './cards/CardItem.vue'
import type { Column } from '../../types'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  columns: T[]
  isReadonly?: boolean
}>()

// __NO SID
const [_columnsTR, columns] = useDragAndDrop(props.columns, {
  plugins: [animations()],
  dragHandle: '.column-handle',
  group: 'kanban',
})
</script>

<template>
  <div
    ref="_columnsTR"
    :class="cn(
      'h-full flex items-start gap-3',
      { 'pointer-events-none': isReadonly },
    )"
  >
    <ColumnItem v-for="column in columns" :key="column._id" :column="column">
      <template #column-content="{ cards }">
        <CardItem v-for="card in cards" :key="card._id" :card="card" />
      </template>
    </ColumnItem>
  </div>
</template>
