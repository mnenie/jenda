<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiSheet } from '@/shared/ui';
import type { SheetElement } from '@/shared/ui';
import FormCreation from './FormCreation.vue';

const sheet = ref<SheetElement | null>(null);

const { t } = useI18n();

const open = () => {
  if (sheet.value) {
    sheet.value.open();
  }
};
</script>

<template>
  <div :class="$style.creation" @click="open">
    <span style="font-weight: 500">+ {{ t('boards.create') }}</span>
  </div>
  <UiSheet ref="sheet">
    <template #header>
      <p class="text-lg" style="font-weight: 500">{{ t('sheet.title') }}</p>
      <span :class="[$style.desc, 'text-sm']">
        {{ t('sheet.description') }}
      </span>
    </template>
    <template #default>
      <FormCreation />
    </template>
  </UiSheet>
</template>

<style module lang="scss">
.creation {
  background-color: var(--zinc-100);
  border: 1px solid var(--zinc-200);
  min-width: 220px;
  height: 120px;
  border-radius: 15px;
  color: var(--zinc-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.desc {
  color: var(--zinc-500);
}

:global(html.dark) {
  .creation {
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    border-color: var(--zinc-600);
    color: var(--zinc-100);
  }
  .desc {
    color: var(--zinc-300);
  }
}
</style>
