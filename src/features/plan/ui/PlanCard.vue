<script setup lang="ts">
import { computed, toRef } from 'vue';
import { refDebounced, createReusableTemplate } from '@vueuse/core';
import { UiBadge, UiButton } from '@/shared/ui';
import PlanIcon from '@/shared/assets/icons/sidebar/plan.svg?component';

const props = defineProps<{
  isExpanded: boolean;
}>();

const isExpandedRef = toRef(props, 'isExpanded');

const debounced = refDebounced(isExpandedRef, 130);

const isShowPlan = computed((): boolean => {
  return isExpandedRef.value ? debounced.value : false;
});

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTemplate v-slot="{ style, position }">
    <span
      v-tooltip="{
        content: $t('sidebar.plan.tooltip'),
        triggers: ['hover'],
        placement: position
      }"
      :class="style"
    >
      *
    </span>
  </DefineTemplate>
  <div v-if="isShowPlan" :class="$style.card">
    <div :class="$style.content">
      <p class="text-sm">
        {{ $t('sidebar.plan.title') }}
        <ReuseTemplate position="top" :style="$style.reusable_helping_sign" />
      </p>
      <span class="text-xs"> {{ $t('sidebar.plan.description') }}</span>
      <UiButton size="sm" :class="$style.btn">
        {{ $t('sidebar.plan.btn') }}
      </UiButton>
    </div>
  </div>
  <div v-else :class="$style.none_expanded_card">
    <ReuseTemplate position="right" />

    <UiBadge variant="outline" :class="$style.badge">
      <div>
        <PlanIcon />
        1/3
      </div>
    </UiBadge>
  </div>
</template>

<style module lang="scss">
.card {
  position: relative;
  padding: 12px;
  background-color: var(--zinc-100);
  border: 1px solid var(--zinc-200);
  border-radius: 4px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 6px;

    & > p {
      font-weight: 500 !important;
    }

    .btn {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}

.reusable_helping_sign {
  color: var(--blue-basic);
  cursor: help;
}

.none_expanded_card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .badge {
    font-size: 10px;
    width: 40px;

    & > div {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }

  & > span {
    position: absolute;
    color: var(--blue-basic);
    cursor: help;
    top: -6px;
    right: -4px;
  }
}

:global(html.dark){
  .card{
    background-color: var(--zinc-700);
    border-color: var(--zinc-600);

    .content{
      & > p {
        color: var(--zinc-100);
      }
      & > span {
        color: var(--zinc-300);
      }
    }
  }
}
</style>
