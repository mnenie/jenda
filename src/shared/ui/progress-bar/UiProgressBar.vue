<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  progress: number;
}>();

const activeWidth = computed(() => {
  return props.progress * 10 + '%';
});
</script>

<template>
  <div :class="$style.progress_bar_container">
    <div :class="$style.progress_bar_active" />
  </div>
</template>

<style module lang="scss">
.progress_bar_container {
  background-color: var(--zinc-300);
  height: 5px;
  width: 100%;
  border-radius: 10px;

  .progress_bar_active {
    background-color: var(--zinc-700);
    width: v-bind('activeWidth');
    height: 100%;
    border-radius: 10px;
  }
}
</style>
