<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { Plus } from 'lucide-vue-next';

const isDark = useDark();
</script>

<template>
  <div :class="$style.block">
    <Plus :size="16" :color="isDark ? 'var(--zinc-300)' : 'var(--zinc-500)'" />
    Add new column
  </div>
</template>

<style module lang="scss">
.block {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--zinc-600);
  background-color: #f9f9f9;
  cursor: pointer;
  min-width: 260px;
  width: 260px;
  height: fit-content;
  border-radius: 12px;
  padding: 0.8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

:global(html.dark) {
  .block {
    background-color: rgba(33, 33, 33, 0.6);
    color: var(--zinc-200);
  }
}
</style>
