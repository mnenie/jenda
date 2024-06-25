<script setup lang="ts">
import { UiBadge } from '@/shared/ui';
import { links } from '../../config/links';
import WorkSpace from './WorkSpace.vue';
import SearchFilter from './SearchFilter.vue';
import PlanCard from './PlanCard.vue';
</script>

<template>
  <nav :class="$style.sidebar">
    <div :class="$style.name">
      <img src="/icons/kanban.png" />
      <h3 class="heading-3">Dizzo</h3>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px 20px 12px 20px;

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: default;
    margin-bottom: 18px;

    & img {
      width: 30px;
      height: 30px;
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
