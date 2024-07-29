<script setup lang="ts">
import { ref } from 'vue';
import { UiButton, UiSheet } from '@/shared/ui';
import type { SheetElement } from '@/shared/ui';
import { Settings2 } from 'lucide-vue-next';

const sheet = ref<SheetElement | null>(null);

const open = () => {
  if (sheet.value) {
    sheet.value.open();
  }
};
</script>

<template>
  <UiButton :variant="'dashed'" :size="'sm'" :class="$style.settings" @click="open">
    <Settings2 :size="16" />
  </UiButton>
  <UiSheet ref="sheet"> settings </UiSheet>
</template>

<style module lang="scss">
.settings {
  height: 30px;
  gap: 8px;

  & > svg {
    color: var(--zinc-500);
  }
}

:global(html.dark) {
  .settings {
    background-color: transparent;
    &:hover {
      background-color: transparent;
      border-color: var(--zinc-500);
    }
    & > svg {
      color: var(--zinc-300);
    }
  }
}
</style>
