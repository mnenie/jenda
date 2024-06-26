<script setup lang="ts">
import { UiInput, UiBadge } from '@/shared/ui';
import { Search } from 'lucide-vue-next';
import { ref } from 'vue';

const filter = ref('');
</script>

<template>
  <div :class="$style.search_container">
    <Search :class="$style.icon" :color="'rgb(82 82 91 / 0.9)'" />
    <UiInput
      id="input"
      ref="inputRef"
      v-model.trim="filter"
      :placeholder="'Search'"
      :class="$style.input_filter"
    />
    <UiBadge variant="secondary" :class="$style.badge">
      <span>⌘</span>
      <span>K</span>
    </UiBadge>
  </div>
</template>

<style module lang="scss">
.search_container {
  position: relative;
  height: 32px;
  margin-bottom: 15px;

  .icon {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    height: 16px;
    width: 16px;
  }

  .input_filter {
    padding-left: 24px;
    padding-right: 40px;
    border: none;
    width: 100%;
    height: 32px;
    box-shadow: none;
    font-weight: 500;
  }

  .badge {
    position: absolute;
    right: 8px;
    top: 50%;
    height: 16px;
    transform: translateY(-50%);
    padding-left: 4px;
    padding-right: 4px;
    & span {
      color: var(--zinc-500);
      font-size: 10px;
    }
  }
}
</style>
