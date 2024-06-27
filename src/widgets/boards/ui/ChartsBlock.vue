<script setup lang="ts">
import { ActivityBoardChart, ActivityTaskChart } from '@/features/boards';
</script>

<template>
  <div :class="$style.charts_container">
    <div :class="$style.chart_container">
      <h4 class="heading-4">Сreated boards</h4>
      <p class="text-sm" style="color: var(--zinc-500)">
        Create, share, work, and then analyze your activity on Dizzo
      </p>
      <div :class="$style.chart">
        <ActivityBoardChart />
      </div>
    </div>
    <div :class="$style.chart_container">
      <h4 class="heading-4">Your tasks</h4>
      <p class="text-sm" style="color: var(--zinc-500)">Solve and complete the tasks you started</p>
      <div :class="$style.chart">
        <ActivityTaskChart />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.charts_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-top: 20px;
  //   background-color: white;
  border-radius: 10px;

  .chart_container {
    display: flex;
    flex-direction: column;
  }

  .chart {
    width: 760px;
    height: 100%;
    margin-top: 20px;
  }
}
</style>
