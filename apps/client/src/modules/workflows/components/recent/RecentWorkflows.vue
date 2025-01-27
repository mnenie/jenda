<script setup lang="ts">
import SectionSign from '../SectionSign.vue'
import RecentCard from './RecentCard.vue'
import type { WorkflowCard } from '../../types'

const cards: WorkflowCard[] = [
  {
    _id: '1',
    name: 'Workflow 1',
    description: 'Workflow 1 description',
    state: 'draft',

  },
  {
    _id: '2',
    name: 'Workflow 2',
    description: 'Workflow 2 description',
    state: 'production',
  },
]
</script>

<template>
  <div class="flex flex-col space-y-3 mt-8">
    <SectionSign section="recent" />
    <div class="grid grid-cols-4 gap-4">
      <RecentCard v-for="card in cards" :key="card._id" :card="card" />
    </div>
  </div>
</template>
