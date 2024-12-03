<script setup lang="ts">
import { UiSheet } from '@/shared/ui'
import { useTemplateRef } from 'vue'
import FormCreation from './FormCreation.vue'

const sheet = useTemplateRef<InstanceType<typeof UiSheet> | null>('sheet')

function open() {
  if (sheet.value) {
    sheet.value.open()
  }
}
</script>

<template>
  <div :class="$style.creation" @click="open">
    <span style="font-weight: 500">+ {{ $t('boards.create') }}</span>
  </div>
  <UiSheet ref="sheet">
    <template #header>
      <p class="text-lg" style="font-weight: 500">
        {{ $t('sheet.title') }}
      </p>
      <span class="text-sm" :class="[$style.desc]">
        {{ $t('sheet.description') }}
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
