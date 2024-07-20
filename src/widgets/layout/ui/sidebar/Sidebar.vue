<script setup lang="ts">
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { UiBadge } from '@/shared/ui';
import { links } from '../../config/links';
import WorkSpace from './WorkSpace.vue';
import { SearchFilter } from '@/features/filter';
import { PlanCard } from '@/features/plan';
import { ArrowsDouble } from '@/shared/assets/icons';
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  isExpanded: boolean;
}>();

const emit = defineEmits<{
  (e: 'onToggle'): void;
}>();

const contentPosition = computed(() => {
  return props.isExpanded ? 'space-between' : 'center';
});
const paddingExpanded = computed(() => {
  return props.isExpanded ? '10px 15px 12px 15px' : '10px';
});

const isDark = useDark();
const { t } = useI18n();

const iconUrl = computed(() => {
  return isDark.value ? '/icons/kanban-dark.png' : '/icons/kanban.png';
});
</script>

<template>
  <nav :class="$style.sidebar" :style="{ padding: paddingExpanded }">
    <div :class="$style.name">
      <div :class="$style.text">
        <img :src="iconUrl" :style="{ marginTop: isExpanded ? '0px' : '3px' }" />
        <h3 v-show="isExpanded" class="heading-4">Jenda</h3>
        <UiBadge v-show="isExpanded">{{ t('sidebar.badge') }}</UiBadge>
      </div>
      <div v-if="!isExpanded" :class="$style.arrow_expanded">
        <ChevronRight :size="14" @click="emit('onToggle')" />
      </div>
      <ArrowsDouble v-show="isExpanded" :class="$style.icon" @click="emit('onToggle')" />
    </div>
    <div :class="$style.content">
      <div>
        <SearchFilter :is-expanded @on-toggle="emit('onToggle')" />
        <WorkSpace :links :is-expanded />
      </div>
      <PlanCard :is-expanded />
    </div>
  </nav>
</template>

<style module lang="scss">
.sidebar {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  user-select: none;
  border-right: 1px solid var(--zinc-200);

  .name {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: v-bind('contentPosition');
    margin-bottom: 18px;

    .text {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: default;
    }

    .icon {
      color: var(--zinc-400);
      cursor: pointer;
      transition: 0.1s ease-in;

      &:hover {
        color: var(--zinc-500);
      }
    }

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

    .menu {
      width: 100%;
      color: var(--zinc-500);
      cursor: pointer;
      padding: 0 auto;
    }
  }

  .arrow_expanded {
    position: fixed;
    left: 46px;
    top: 40%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: var(--zinc-100);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
}

:global(.dark) {
  .sidebar {
    background-color: rgba(var(--zinc-rgb-800), 0.5);
    border-color: var(--dark-border);
  }

  .arrow_expanded {
    background-color: rgba(var(--zinc-rgb-600), 0.8);
    color: var(--zinc-200);
  }
}
</style>
