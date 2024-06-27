<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { dataBoards } from '../config/charts';
import { Chart } from 'chart.js/auto';
import type { ChartItem } from 'chart.js';

const chartRef = ref<ChartItem>();

onMounted(() => {
  new Chart(chartRef.value!, {
    type: 'bar',
    data: dataBoards,
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
            color: 'rgb(244 244 245)'
          }
        },
        y: {
          grid: {
            display: false,
            color: 'rgb(244 244 245)'
          }
        }
      }
    }
  });
});
</script>

<template>
  <canvas ref="chartRef" />
</template>
