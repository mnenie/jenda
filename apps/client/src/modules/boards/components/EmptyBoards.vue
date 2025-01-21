<script setup lang="ts">
import CreateNewBoard from './features/CreateNewBoard.vue'
import EmptyContainer from '@/modules/common/components/EmptyContainer.vue'
</script>

<template>
  <EmptyContainer icon="hugeicons:dashboard-circle-add" t-prefix="boards">
    <CreateNewBoard
      :plural="2"
      variant="secondary"
      class="mt-1"
    />
  </EmptyContainer>
</template>
