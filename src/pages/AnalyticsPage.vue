<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { useBreakpoints } from '@/shared/lib/composables';
import { BoardsChart, OnlineChart, TasksChart, UsersChart, SharedSection } from '@/widgets/analytics';
import { UiBadge } from '@/shared/ui';

useHead({
  title: 'Jenda | Analytics'
});

const { breakpoints } = useBreakpoints();

const containerWith = computed(() => {
  if (breakpoints.greaterOrEqual('intermediateDesktop').value) return '600px';
  if (breakpoints.between('intermediateLaptop', 'intermediateDesktop').value) return '500px';
  if (breakpoints.between('laptop', 'intermediateLaptop').value) return '400px';
  return undefined;
});
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.section_about">
      <p class="text-sm">{{ $t('analytics.description') }}</p>
    </div>
    <div :class="$style.section_badges">
      <UiBadge v-for="(badge, _) in $tm('analytics.badges')" :key="_" variant="outline">
        {{ badge }}
      </UiBadge>
    </div>
    <div :class="$style.charts">
      <div :class="$style.charts_container" :style="{ maxWidth: containerWith }">
        <TasksChart />
        <UsersChart />
      </div>
      <div :class="$style.charts_container">
        <OnlineChart />
        <BoardsChart />
      </div>
    </div>
    <SharedSection />
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  .section_badges {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 30px;
  }
}

.section_about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;

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
