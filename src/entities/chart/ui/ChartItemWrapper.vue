<script setup lang="ts">
import { UiBadge } from '@/shared/ui';
import { Menu } from '@/shared/assets/icons';
import type { Chart } from '../model';

defineOptions({
  inheritAttrs: false
});

defineProps<{
  chart: Chart;
  width: string;
  height?: string;
}>();
</script>

<template>
  <div v-bind="$attrs" :class="$style.container" :style="{ maxWidth: width, height }">
    <div :class="$style.top_part">
      <div :class="$style.title">
        <p class="text-sm">{{ $t(`analytics.charts.${chart.key}.name`) }}</p>
        <UiBadge variant="secondary" :class="$style.badge">
          {{ chart.section }}
        </UiBadge>
      </div>
      <Menu :class="$style.icon" />
    </div>
    <slot />
    <span v-if="chart.key === 'users'" class="text-xs">
      {{ $t(`analytics.charts.${chart.key}.description`) }}
    </span>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  border: 1px solid var(--zinc-200);
  padding: 12px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  flex-direction: column;
  align-items: center;
  height: fit-content;
  gap: 10px;
  width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .top_part {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 8px;

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;

      .badge {
        color: var(--zinc-500);
        background-color: var(--zinc-100);
      }
    }
  }

  .icon {
    color: var(--zinc-400);
    cursor: pointer;
  }

  & > span {
    color: var(--zinc-500);
  }
}

:global(html.dark) {
  .container {
    border-color: var(--zinc-600);
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    & > span {
      color: var(--zinc-200);
    }
    .icon {
      color: var(--zinc-300);
    }
  }
}
</style>
