<script setup lang="ts">
import { UiButton, UiInput } from '@/shared/ui';
import { Search, ArrowUpWideNarrow } from 'lucide-vue-next';
import { ref } from 'vue';

const filter = ref('');
</script>

<template>
  <div :class="$style.items">
    <div :class="$style.filter_container">
      <Search :class="$style.icon" :color="'rgb(82 82 91 / 0.9)'" />
      <UiInput
        id="filter"
        ref="filterRef"
        v-model.trim="filter"
        :placeholder="'Filter boards ...'"
        :class="$style.filter"
      />
    </div>
    <UiButton :variant="'dashed'">
      <span style="margin-right: 6px; font-size: 13px; line-height: 1px">More Popular</span>
      <ArrowUpWideNarrow :size="18" :color="'rgb(82 82 91 / 0.9)'" />
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
</style>
