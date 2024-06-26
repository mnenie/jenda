<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Dizzo - cloud program for project and task management'
});
</script>

<template>
  <div :class="$style.dashboard">
    <!-- hello -->
  </div>
</template>

<style module lang="scss">
.dashboard {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
