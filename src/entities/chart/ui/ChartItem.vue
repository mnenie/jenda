<script setup lang="ts">
import type { Chart } from '../model';

defineProps<{
  chart: Chart;
}>();
</script>

<template>
  <div :class="$style.chart_container">
    <h4 class="heading-4">{{ chart.title }}</h4>
    <p class="text-sm">
      {{ chart.description }}
    </p>
    <div :class="$style.chart">
      <component :is="chart.chart" />
    </div>
  </div>
</template>

<style module lang="scss">
.chart_container {
  display: flex;
  flex-direction: column;
  width: 100%;

  & > p {
    color: var(--zinc-500);
  }

  .chart {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }
}

:global(html.dark) {
  .chart_container {
    & > p {
      color: var(--zinc-300);
    }
  }
}
</style>
