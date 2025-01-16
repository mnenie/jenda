<script setup lang="ts">
import CreateNewNote from './features/CreateNewNote.vue'
import EmptyContainer from '@/modules/common/components/EmptyContainer.vue'
</script>

<template>
  <EmptyContainer icon="hugeicons:agreement-03" t-prefix="notes">
    <CreateNewNote
      :plural="2"
      variant="secondary"
      class="mt-1"
    />
  </EmptyContainer>
</template>
