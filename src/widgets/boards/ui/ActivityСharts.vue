<script setup lang="ts">
import { chartsData } from '../config';
import { ChartItem } from '@/entities/chart';
</script>

<template>
  <div :class="$style.charts_container">
    <ChartItem v-for="data in chartsData" :key="data.id" :chart="data" />
  </div>
</template>

<style module lang="scss">
.charts_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-top: 20px;
  border-radius: 10px;
}
</style>
