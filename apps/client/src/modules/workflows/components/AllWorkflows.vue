<script setup lang="ts">
import SectionSign from './SectionSign.vue'
import WorkflowsTable from './WorkflowsTable.vue'
import type { Workflow } from '../types'

defineProps<{
  workflows: Workflow[]
}>()
</script>

<template>
  <div class="flex flex-col space-y-3 mt-10">
    <SectionSign section="all" />
    <WorkflowsTable :workflows="workflows" />
  </div>
</template>
