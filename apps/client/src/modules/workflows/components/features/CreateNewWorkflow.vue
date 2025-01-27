<script setup lang="ts">
import AddWorkflow from './handlers/AddWorkflow.vue'
</script>

<template>
  <AddWorkflow
    variant="solid"
    @add-workflow="$router.push({ name: 'boards-new' })"
  />
</template>
