<script setup lang="ts">
import DescriptionEditor from './DescriptionEditor.vue'
import EditedBy from './EditedBy.vue'
</script>

<template>
  <div class="h-full w-full bg-transparent">
    <DescriptionEditor v-slot="{ task }">
      <EditedBy :task />
    </DescriptionEditor>
  </div>
</template>
