<script setup lang="ts">
import { computed } from 'vue';

const { progress = 5 } = defineProps<{
  progress: number;
}>();

const activeWidth = computed(() => {
  return progress * 10 + '%';
});
</script>

<template>
  <div :class="$style.progress_bar_container">
    <div :class="$style.progress_bar_active" :style="{ width: activeWidth }"/>
  </div>
</template>

<style module lang="scss">
.progress_bar_container {
  background-color: var(--zinc-100);
  height: 5px;
  width: 100%;
  border-radius: 10px;

  .progress_bar_active {
    background-color: var(--blue-secondary);
    height: 100%;
    border-radius: 10px;
  }
}

:global(html.dark) {
  .progress_bar_container {
    background-color: var(--zinc-600);
  }
}
</style>
