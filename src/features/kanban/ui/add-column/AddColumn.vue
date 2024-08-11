<script setup lang="ts">
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { Plus } from 'lucide-vue-next';
import { UiSheet, type SheetElement } from '@/shared/ui';
import FormCreation from './FormCreation.vue';

const isDark = useDark();
const { t } = useI18n();

const sheetColumn = ref<SheetElement | null>(null);

const open = () => {
  if (sheetColumn.value) {
    sheetColumn.value.open();
  }
};
</script>

<template>
  <div class="text-sm" :class="$style.block" @click="open">
    <Plus :size="16" :color="isDark ? 'var(--zinc-300)' : 'var(--zinc-500)'" />
    {{ t('kanban.new') }}
  </div>
  <UiSheet ref="sheetColumn">
    <template #header>
      <p class="text-lg" style="font-weight: 500">{{ t('kanban.sheet.column.title') }}</p>
      <span :class="[$style.desc, 'text-sm']">
        {{ t('kanban.sheet.column.description') }}
      </span>
    </template>
    <template #default>
      <FormCreation />
    </template>
  </UiSheet>
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
  padding: 0.7rem 0.8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}

.desc {
  color: var(--zinc-500);
}

:global(html.dark) {
  .block {
    background-color: rgba(33, 33, 33, 0.6);
    color: var(--zinc-200);
  }
  .desc {
    color: var(--zinc-300);
  }
}
</style>
