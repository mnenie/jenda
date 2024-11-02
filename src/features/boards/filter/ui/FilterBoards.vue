<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { UiButton, UiInput } from '@/shared/ui';
import { ArrowUpDown, Search, History } from 'lucide-vue-next';

const filter = ref('');
const isDark = useDark();

const iconColor = computed(() => {
  return isDark.value ? 'var(--zinc-300)' : 'rgb(82 82 91 / 0.9)';
});
</script>

<template>
  <div :class="$style.items">
    <div :class="$style.filter_container">
      <Search :class="$style.icon" :color="iconColor" />
      <UiInput
        id="filter"
        ref="filterRef"
        v-model.trim="filter"
        :placeholder="$t('boards.filter.input')"
        :class="$style.filter"
      />
    </div>
    <UiButton :variant="'dashed'" style="padding: 0 12px">
      <ArrowUpDown :size="17" :color="iconColor" />
      <span style="margin-left: 6px">{{ $t('boards.filter.popularity') }}</span>
    </UiButton>
    <UiButton :variant="'dashed'" style="padding: 0 12px">
      <History :size="17" :color="iconColor" />
    </UiButton>
  </div>
</template>

<style module lang="scss">
.items {
  display: flex;
  align-items: center;
  gap: 6px;

  .filter_container {
    position: relative;
    height: 32px;

    .icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      height: 16px;
      width: 16px;
    }

    .filter {
      padding-left: 32px;
      padding-right: 40px;
      width: 100%;
      height: 32px;
      font-weight: 500;
      background-color: white;
    }
  }
}

:global(html.dark) {
  .items {
    .filter_container {
      .filter {
        background-color: rgba(var(--zinc-rgb-600), 0.4);
        &::placeholder {
          color: var(--zinc-200);
        }
      }
    }
  }
}
</style>
