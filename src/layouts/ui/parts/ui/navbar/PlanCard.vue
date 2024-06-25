<script setup lang="ts">
import { UiCard, UiProgressBar } from '@/shared/ui';
import { WandSparkles } from 'lucide-vue-next';
</script>
<template>
  <div>
    <div :class="$style.content">
      <WandSparkles :class="$style.icon" :color="'var(--zinc-900)'" />
      <div :class="$style.plan_about">
        <div :class="$style.text">
          <p class="text-sm">Upgrade your plan</p>
          <span class="text-xs">1/10</span>
        </div>
        <span class="text-sm"></span>
        <UiProgressBar :progress="6" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.content {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  .icon {
    min-width: 17px;
    width: 18px;
    height: 18px;
  }

  .plan_about {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    color: var(--zinc-900);

    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      & p,
      & span {
        font-weight: 500 !important;
      }
    }
  }
}
</style>
