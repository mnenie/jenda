<script setup lang="ts" generic="T extends Column">
import ColumnItem from './columns/ColumnItem.vue'
import CardItem from './cards/CardItem.vue'
import type { Column } from '../../types'

defineProps<{
  columns: T[]
}>()
</script>

<template>
  <ColumnItem v-for="column in columns" :key="column._id" :column="column">
    <template #column-content="{ cards }">
      <CardItem v-for="card in cards" :key="card._id" :card="card" />
    </template>
  </ColumnItem>
</template>
