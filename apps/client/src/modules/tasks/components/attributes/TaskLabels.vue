<script setup lang="ts">
import AttrsWithPopover from './sub/AttrsWithPopover.vue'
import type { Label } from '@/modules/boards/types'
import { useBoardsStore } from '@/modules/boards/stores/boards'
import LabelItem from '@/modules/boards/components/additions/LabelItem.vue'
import { useTaskCombobox } from '@/modules/boards/composables/kanban'

const labels = defineModel<Label[]>('labels', { required: true })

const { board } = useBoardsStore()

const [removeEntity, addEntity] = useTaskCombobox(labels, 'id')
</script>

<template>
  <AttrsWithPopover
    v-model:items="labels"
    :items-in-board="board.labels"
    item-id="id"
    item-value="name"
    :input-placeholder="$t('tasks.labels.input_placeholder')"
    @add="addEntity"
    @remove="removeEntity"
  >
    <template #itemBadge>
      <LabelItem
        v-for="label in labels"
        :key="label.id"
        :label="label"
        closable
        @remove="removeEntity(label)"
      />
    </template>

    <template #itemInList="{ item: label }">
      <LabelItem
        :key="label.id"
        :label="label"
      />
    </template>
  </AttrsWithPopover>
</template>
