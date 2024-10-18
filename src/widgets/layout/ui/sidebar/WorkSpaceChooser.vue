<script setup lang="ts">
import { useExpanded } from '@/shared/lib/composables';
import { ChevronDown } from 'lucide-vue-next';
import PaneArrow from '@/shared/assets/icons/sidebar/pane-arrow.svg?component';
import ArrowExpanded from '@/shared/assets/icons/sidebar/arrow-expanded.svg?component';

const expandedComposable = useExpanded();

const { isExpanded, onToggleArea } = expandedComposable.getExpanded();
</script>

<template>
  <div :class="$style.container" :style="{ padding: isExpanded ? '10px 14px' : '16px 0 17px 0' }">
    <div :class="$style.chooser" :style="{ justifyContent: isExpanded ? 'space-between' : 'center' }">
      <div v-show="isExpanded" :class="$style.name_wrapper">
        <img :class="$style.logo" src="/icons/kanban.png" />
        <img :class="$style.logo_dark" src="/icons/kanban-dark.png" />
        <p :class="$style.name">Example.io</p>
        <ChevronDown :size="16" :class="$style.icon" />
      </div>
      <PaneArrow v-if="isExpanded" :class="$style.icon" @click="onToggleArea" />
      <ArrowExpanded v-else :class="$style.icon_arrow" @click="onToggleArea" />
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  .chooser {
    display: flex;
    align-items: center;
    color: var(--sidebar-section-color);

    .name_wrapper {
      display: flex;
      align-items: center;
      gap: 6px;

      .logo,
      .logo_dark {
        width: 24px;
        height: 24px;
        border-radius: 5px;
        margin-right: 6px;
      }
      .logo_dark {
        display: none;
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
      color: var(--zinc-400);
    }
    .icon_arrow {
      cursor: pointer;
      font-size: 20px;
      color: var(--sidebar-text-color);
    }
  }
}

:global(html.dark) {
  .container {
    .chooser {
      .name_wrapper {
        .logo_dark {
          display: flex;
        }
        .logo {
          display: none;
        }
      }
      .icon {
        color: var(--zinc-300);
      }
      .icon_arrow {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
