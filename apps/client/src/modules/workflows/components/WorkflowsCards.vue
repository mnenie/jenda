<script setup lang="ts">
import CardItem from './CardItem.vue'
import type { WorkflowCard } from '../types'

defineProps<{
  cards: WorkflowCard[]
}>()
</script>

<template>
  <div class="flex flex-col space-y-3 mt-1">
    <div class="grid grid-cols-4 gap-4 items-stretch">
      <CardItem v-for="card in cards" :key="card._id" :card="card" />
    </div>
  </div>
</template>
