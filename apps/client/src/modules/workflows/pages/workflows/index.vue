<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AllWorkflows from '../../components/AllWorkflows.vue'
import GeneralActionsPanel from '../../components/GeneralActionsPanel.vue'
import RecentWorkflows from '../../components/recent/RecentWorkflows.vue'
import { useWorkflowsStore } from '../../stores/workflows'

const workflowsStore = useWorkflowsStore()
const { workflows } = storeToRefs(workflowsStore)
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <GeneralActionsPanel />
    <RecentWorkflows />
    <AllWorkflows :workflows />
  </div>
</template>
