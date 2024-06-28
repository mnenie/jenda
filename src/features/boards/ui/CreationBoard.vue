<script setup lang="ts">
import { UiSheet } from '@/shared/ui';
import type { SheetElement } from '@/shared/ui';
import { ref } from 'vue';

const sheet = ref<SheetElement | null>(null);

const open = () => {
  if (sheet.value) {
    sheet.value.open();
  }
};
</script>

<template>
  <div :class="$style.creation" @click="open">
    <span>+ Create new board</span>
  </div>
  <UiSheet ref="sheet"> hello from sheet </UiSheet>
</template>

<style module lang="scss">
.creation {
  background-color: var(--zinc-100);
  border: 1px solid var(--zinc-200);
  min-width: 220px;
  height: 120px;
  border-radius: 15px;
  color: var(--purple-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
