<script setup lang="ts">
import { UiBadge } from '@/shared/ui';
import { links } from '../../config/links';
import WorkSpace from './WorkSpace.vue';
import { SearchFilter } from '@/features/filter';
import { PlanCard } from '@/features/plan';
</script>

<template>
  <nav :class="$style.sidebar">
    <div :class="$style.name">
      <img src="/icons/kanban.png" />
      <h3 class="heading-4">Dizzo</h3>
      <UiBadge>free</UiBadge>
    </div>
    <div :class="$style.content">
      <div>
        <SearchFilter />
        <WorkSpace :links />
      </div>
      <PlanCard />
    </div>
  </nav>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.sidebar {
  max-width: 240px;
  min-width: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 15px 12px 15px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-right: 1px solid var(--zinc-200);

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: default;
    margin-bottom: 18px;

    & img {
      width: 24px;
      height: 24px;
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
