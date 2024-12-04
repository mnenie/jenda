<script setup lang="ts">
import { useExpanded } from '@/shared/lib/composables'

const expandedComposable = useExpanded()

const { isExpanded, onToggleArea } = expandedComposable.getExpanded()
</script>

<template>
  <div :class="$style.container" :style="{ padding: isExpanded ? '12px 14px 10px 14px' : '14px 0 21px 0' }">
    <div :class="$style.chooser" :style="{ justifyContent: isExpanded ? 'space-between' : 'center' }">
      <div v-show="isExpanded" :class="$style.name_wrapper">
        <img :class="$style.logo" src="/icons/kanban.png" />
        <img :class="$style.logo_dark" src="/icons/kanban-dark.png" />
        <p :class="$style.name">
          Example.io
        </p>
        <div i-lucide-chevron-down text-base :class="$style.icon" />
      </div>
      <div
        v-if="isExpanded"
        i-hugeicons-sidebar-left-01
        text-xl
        :class="$style.icon"
        @click="onToggleArea"
      />
      <div v-else i-hugeicons-sidebar-right-01 :class="$style.icon_arrow" @click="onToggleArea" />
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
