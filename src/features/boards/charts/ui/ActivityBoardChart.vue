<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js/auto';
import type { ChartItem } from 'chart.js';
import { dataBoards, options } from '../model';
import useChart from '../lib/composables/useChart';

const chartRef = ref<ChartItem>();

onMounted(() => {
  new Chart(chartRef.value!, {
    type: 'bar',
    data: dataBoards,
    options: options
  });
});

useChart(dataBoards, options);
</script>

<template>
  <canvas ref="chartRef" />
</template>
