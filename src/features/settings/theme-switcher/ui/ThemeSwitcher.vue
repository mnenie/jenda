<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import { useColorMode } from '@vueuse/core';
import useTheme from '../model/composables/useTheme';
import type { ThemeBlock } from '../model';
import { UiButton, UiRadioGroupContainer } from '@/shared/ui';
import LightBlock from './LightBlock.vue';
import DarkBlock from './DarkBlock.vue';
import SystemBlock from './SystemBlock.vue';

const { store } = useColorMode();

const themeBlocks = shallowRef<ThemeBlock[]>([
  { id: 0, item: LightBlock, active: store.value === 'light', value: 'light' },
  { id: 1, item: DarkBlock, active: store.value === 'dark', value: 'dark' },
  { id: 2, item: SystemBlock, active: store.value === 'auto', value: 'auto' }
]);
const { onNewPreferences, changeActiveTheme } = useTheme(themeBlocks);

const themeAbout = computed(() => {
  return (value: string) => {
    if (value === 'auto') {
      return 'System';
    }
    return value
      .split('')
      .map((char, index) => (index === 0 ? char.toUpperCase() : char))
      .join('');
  };
});
</script>

<template>
  <form :class="$style.theme_form" @submit.prevent="onNewPreferences">
    <UiRadioGroupContainer>
      <div v-for="theme in themeBlocks" :key="theme.id" :class="$style.block">
        <component
          :is="theme.item"
          :class="{ [$style.active]: theme.active }"
          @click="changeActiveTheme(theme.id)"
        />
        <span class="text-xs">{{ themeAbout($t(`settings.theme.variants.${theme.value}`)) }}</span>
      </div>
    </UiRadioGroupContainer>
    <UiButton variant="outline" type="submit">{{ $t('settings.theme.btn') }}</UiButton>
  </form>
</template>

<style module lang="scss">
.theme_form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    & > span {
      font-weight: 500 !important;
    }
  }
}
.active {
  border-color: var(--zinc-900);
  &:hover {
    border-color: var(--zinc-900);
  }
}

:global(html.dark) {
  .active {
    border-color: var(--zinc-300);
    &:hover {
      border-color: var(--zinc-300);
    }
  }
}
</style>
