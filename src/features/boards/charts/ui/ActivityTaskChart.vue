<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js/auto';
import type { ChartItem } from 'chart.js';
import { dataTasks, options } from '../model/chart.js';
import useChart from '../model/composables/useChart.js';

const chartRef = ref<ChartItem>();

onMounted(() => {
  new Chart(chartRef.value!, {
    type: 'line',
    data: dataTasks,
    options: options
  });
});

useChart(dataTasks, options);
</script>

<template>
  <canvas ref="chartRef" />
</template>
