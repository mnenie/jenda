<script setup lang="ts">
import { useExpanded } from '@/shared/lib/composables';
import { ChevronDown } from 'lucide-vue-next';
import PaneArrow from '@/shared/assets/icons/sidebar/pane-arrow.svg?component';

const expandedComposable = useExpanded();

const { onToggleArea } = expandedComposable.getExpanded();
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.chooser">
      <div :class="$style.name_wrapper">
        <img :class="$style.logo" src="/icons/kanban.png" />
        <p :class="$style.name">Example.io</p>
        <ChevronDown :size="16" :class="$style.icon" />
      </div>
      <PaneArrow :class="$style.icon" @click="onToggleArea" />
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  padding: 10px 14px;

  .chooser {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--sidebar-section-color);

    .name_wrapper {
      display: flex;
      align-items: center;
      gap: 6px;

      .logo {
        width: 24px;
        height: 24px;
        border-radius: 5px;
        margin-right: 6px;
      }

      .name {
        color: var(--sidebar-text-color);
        font-size: 18px;
        font-weight: 600;
      }
    }

    .icon {
      cursor: pointer;
      font-size: 20px;
    }
  }
}
</style>
