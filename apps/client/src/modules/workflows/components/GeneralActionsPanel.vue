<script setup lang="ts">
import CreateNewWorkflow from './features/CreateNewWorkflow.vue'
import SearchWorkflows from './filters/SearchWorkflows.vue'
import WorkflowsSort from './filters/WorkflowsSort.vue'
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <SearchWorkflows />
      <WorkflowsSort />
    </div>
    <CreateNewWorkflow />
  </div>
</template>
