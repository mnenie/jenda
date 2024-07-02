<script setup lang="ts">
import type { Chart } from '../model';

defineProps<Omit<Chart, 'id'>>();
</script>

<template>
  <div :class="$style.chart_container">
    <h4 class="heading-4">{{ title }}</h4>
    <p class="text-sm" style="color: var(--zinc-500)">
      {{ description }}
    </p>
    <div :class="$style.chart">
      <component :is="chart" />
    </div>
  </div>
</template>

<style module lang="scss">
.chart_container {
  display: flex;
  flex-direction: column;
}

.chart {
  width: 760px;
  height: 100%;
  margin-top: 20px;
}
</style>
