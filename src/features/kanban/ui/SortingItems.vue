<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@/shared/ui';
import { AlignEndHorizontal, ArrowDown10 } from 'lucide-vue-next';

const { t } = useI18n();
</script>

<template>
  <UiButton :variant="'dashed'" :size="'sm'" :class="$style.sort_button">
    <AlignEndHorizontal :size="16" />
    {{ t('kanban.sorting.activity') }}
  </UiButton>
  <UiButton :variant="'dashed'" :size="'sm'" :class="$style.sort_button">
    <ArrowDown10 :size="16" />
    {{ t('kanban.sorting.workload') }}
  </UiButton>
</template>

<style module lang="scss">
.sort_button {
  height: 30px;
  gap: 8px;

  & > svg {
    color: var(--zinc-400);
  }
}

:global(html.dark) {
  .sort_button {
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
