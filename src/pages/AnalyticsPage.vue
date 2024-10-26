<script setup lang="ts">
import { UsersChart } from '@/widgets/analytics';
</script>

<template>
  <div :class="$style.section_about">
    <p class="text-sm">{{ $t('analytics.description') }}</p>
  </div>
  <div :class="$style.charts">
    <UsersChart />
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

:global(html.dark) {
  .section_about {
    & > p {
      color: var(--zinc-300);
    }
  }
}
</style>
