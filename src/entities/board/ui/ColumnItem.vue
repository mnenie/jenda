<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { Ellipsis, Plus } from 'lucide-vue-next';
import type { Column } from '../model';
import { useI18n } from 'vue-i18n';

defineOptions({
  inheritAttrs: false
});

defineProps<{
  column: Column;
}>();

const isDark = useDark();
const { t } = useI18n();

defineSlots<{
  content: () => any;
  default: () => any;
}>();
</script>

<template>
  <div :class="$style.column">
    <div class="text-sm" :class="$style.top_part" v-bind="$attrs">
      <div :class="$style.name">
        <slot />
        <span>{{ column.cards?.length }}</span>
      </div>
      <Ellipsis :size="16" :color="isDark ? 'var(--zinc-300)' : 'var(--zinc-400)'" />
    </div>
    <div v-if="column.cards" :class="$style.content">
      <slot name="content" />
    </div>
    <div :class="$style.bottom">
      <div class="text-sm" :class="$style.add">
        <Plus :size="16" :color="isDark ? 'var(--zinc-300)' : 'var(--zinc-500)'" />
        {{ t('kanban.cards.add') }}
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.column {
  position: relative;
  justify-content: space-between;
  min-width: 260px;
  width: 260px;
  max-height: 100%;
  height: fit-content;
  overflow-y: auto;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  vertical-align: top;
  white-space: normal;
  scroll-margin: 8px;

  .top_part {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 0.8rem;
    border-radius: 12px 12px 0 0;
    background-color: #f9f9f9;
    cursor: grab;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--zinc-500);
    font-weight: 500;
  }

  .content {
    padding: 6px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  }

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    .indicator {
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }
  }

  .bottom {
    position: sticky;
    bottom: 0;
    left: 0;
    padding: 0.8rem;
    border-radius: 0px 0px 12px 12px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--zinc-400);
    font-weight: 500;

    .add {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
  }
}

:global(html.dark) {
  .column {
    background-color: var(--zinc-700);
    .top_part,
    .bottom {
      background-color: rgba(33, 33, 33, 0.6);
      color: var(--zinc-200);
    }
  }
}
</style>
