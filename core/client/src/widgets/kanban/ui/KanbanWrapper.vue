<script setup lang="ts">
import type { Column } from '@/entities/board'
import { AddColumn, DragCards, DragColumns } from '@/features/kanban'

defineProps<{
  columns?: Column[]
}>()
</script>

<template>
  <div :class="$style.kanban_wrapper">
    <div v-if="columns">
      <DragColumns :columns="columns">
        <template #default="{ cards }">
          <DragCards :cards="cards" />
        </template>
      </DragColumns>
    </div>
    <AddColumn />
  </div>
</template>

<style module lang="scss">
.kanban_wrapper {
  padding: 15px;
  bottom: 50px;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  right: 0;
  scrollbar-color: rgba(var(--zinc-rgb-300), 0.3);
  scrollbar-width: auto;
  top: 0;
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 15px;
}

.flip-list-move {
  transition: transform 0.3s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.2;
}
</style>
