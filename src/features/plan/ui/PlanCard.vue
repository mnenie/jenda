<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiProgressBar } from '@/shared/ui';
import { WandSparkles, DollarSign } from 'lucide-vue-next';

const props = defineProps<{
  isExpanded: boolean;
}>();

const { t } = useI18n();

const planPosition = computed(() => {
  return props.isExpanded ? 'flex-start' : 'center';
});
const iconSize = computed(() => {
  return props.isExpanded ? '18px' : '17px';
});
</script>
<template>
  <div>
    <div v-if="isExpanded" :class="$style.content">
      <WandSparkles :class="$style.icon" />
      <div :class="$style.plan_about">
        <div :class="$style.text">
          <span class="text-xs">{{ t('sidebar.plan') }}</span>
          <span class="text-xs">6/10</span>
        </div>
        <UiProgressBar :progress="6" />
      </div>
    </div>
    <div v-else :class="$style.no_expanded_plan">
      <span class="text-sm">free</span>
      <div :class="$style.absolute_plan">
        <DollarSign :class="$style.icon" />
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
    color: var(--zinc-700);
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
}
.no_expanded_plan {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    color: var(--zinc-600);
    font-weight: 500 !important;
  }

  .absolute_plan {
    cursor: pointer;
    position: absolute;
    left: -3px;
    top: 0px;
    width: 11px;
    height: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--zinc-500);
  }
}

:global(html.dark) {
  .content {
    .icon{
      color: var(--zinc-300);
    }
    .plan_about {
      .text {
        & p,
        span {
          color: var(--zinc-100);
        }
      }
    }
  }
  .no_expanded_plan {
    & span {
      color: var(--zinc-300);
    }
    .absolute_plan{
      color: var(--zinc-300);
    }
  }
}
</style>
