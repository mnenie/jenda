<script setup lang="ts">
import { computed } from 'vue';
import { useBreakpoints, breakpointsSematic } from '@vueuse/core';
import { useHead } from '@unhead/vue';
import { BoardsChart, OnlineChart, TasksChart, UsersChart } from '@/widgets/analytics';

useHead({
  title: 'Jenda | Analytics'
});

const breakpoints = useBreakpoints({
  ...breakpointsSematic,
  intermediateDesktop: 1820,
  intermediateLaptop: 1600
});

const containerWith = computed(() => {
  if (breakpoints.greaterOrEqual('intermediateDesktop').value) return '600px';
  if (breakpoints.between('intermediateLaptop', 'intermediateDesktop').value) return '500px';
  if (breakpoints.between('laptop', 'intermediateLaptop').value) return '400px';
  return undefined;
});

console.log(breakpoints.active().value);
</script>

<template>
  <div :class="$style.section_about">
    <p class="text-sm">{{ $t('analytics.description') }}</p>
  </div>
  <div :class="$style.charts">
    <div :class="$style.charts_container" :style="{ maxWidth: containerWith }">
      <UsersChart />
      <TasksChart />
    </div>
    <div :class="$style.charts_container">
      <OnlineChart />
      <BoardsChart />
    </div>
  </div>
</template>

<style module lang="scss">
.section_about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  & > p {
    color: var(--zinc-500);
  }
}

.charts {
  display: flex;
  padding: 0 10px 0 0;
  gap: 20px;

  .charts_container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
  }
}

:global(html.dark) {
  .section_about {
    & > p {
      color: var(--zinc-300);
    }
  }
}
</style>
