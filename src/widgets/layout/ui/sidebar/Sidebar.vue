<script setup lang="ts">
import { UiBadge } from '@/shared/ui';
import { links } from '../../config/links';
import WorkSpace from './WorkSpace.vue';
import { SearchFilter } from '@/features/filter';
import { PlanCard } from '@/features/plan';
import { computed } from 'vue';
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
</script>

<template>
  <nav :class="$style.sidebar" :style="{ padding: paddingExpanded }">
    <div :class="$style.name">
      <div :class="$style.text">
        <img src="/icons/kanban.png" :style="{ marginTop: isExpanded ? '0px' : '3px' }" />
        <h3 v-show="isExpanded" class="heading-4">Jenda</h3>
        <UiBadge v-show="isExpanded">free</UiBadge>
      </div>
      <div v-if="!isExpanded" :class="$style.arrow_expanded">
        <ChevronRight :size="14" color="white" @click="emit('onToggle')" />
      </div>
      <img v-show="isExpanded" src="/icons/arrows.svg" :class="$style.icon" @click="emit('onToggle')" />
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
    position: absolute;
    right: -20px;
    top: 60%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
}
</style>
