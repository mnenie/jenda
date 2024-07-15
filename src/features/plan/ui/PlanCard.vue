<script setup lang="ts">
import { UiProgressBar } from '@/shared/ui';
import { WandSparkles } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps<{
  isExpanded: boolean;
}>();

const planPosition = computed(() => {
  return props.isExpanded ? 'flex-start' : 'center';
});

const iconSize = computed(() => {
  return props.isExpanded ? '18px' : '17px';
});
</script>
<template>
  <div>
    <div :class="$style.content">
      <WandSparkles :class="$style.icon" :color="'var(--zinc-700)'" />
      <div v-if="isExpanded" :class="$style.plan_about">
        <div :class="$style.text">
          <span class="text-xs">Upgrade your plan</span>
          <span class="text-xs">6/10</span>
        </div>
        <UiProgressBar :progress="6" />
      </div>
      <div v-else :class="$style.absolute_plan">
        <span>6</span>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.content {
  position: relative;
  display: flex;
  align-items: v-bind('planPosition');
  justify-content: v-bind('planPosition');
  gap: 8px;
  width: 100%;

  .icon {
    min-width: 16px;
    width: v-bind('iconSize');
    height: v-bind('iconSize');
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
      margin-bottom: 2px;

      & p,
      & span {
        font-weight: 500 !important;
      }
    }
  }

  .absolute_plan {
    position: absolute;
    right: -2px;
    top: -4px;
    width: 11px;
    height: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--purple-main);
    border-radius: 50%;

    & > span {
      color: white;
      font-weight: 500 !important;
      font-size: 9px;
    }
  }
}
</style>
