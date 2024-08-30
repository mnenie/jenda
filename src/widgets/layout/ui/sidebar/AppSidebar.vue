<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { links } from '../../model';
import { SearchFilter } from '@/features/filter';
import { UiBadge } from '@/shared/ui';
import { PlanCard } from '@/features/plan';
import { ArrowsDouble } from '@/shared/assets/icons';
import WorkSpace from './WorkSpace.vue';
import ProjectsList from './ProjectsList.vue';
import { AlignJustify } from 'lucide-vue-next';
import type { Board } from '@/entities/board';

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

const iconUrl = computed(() => {
  return isDark.value ? '/icons/kanban-dark.png' : '/icons/kanban.png';
});

// mock -> after data from backend
//@ts-ignore
const boards = ref<Board[]>([
  { _id: '0', name: 'test', users: [], status: 'work', color: '#a1612a' },
  { _id: '1', name: 'New board', users: [], status: 'work', color: '#45ad2d' }
]);
</script>

<template>
  <nav :class="$style.sidebar" :style="{ padding: paddingExpanded }">
    <div :class="$style.name" :style="{ marginBottom: isExpanded ? '18px' : '22px' }">
      <div v-if="isExpanded" :class="$style.text">
        <img :src="iconUrl" />
        <h3 class="heading-4">Jenda</h3>
        <UiBadge>{{ $t('sidebar.badge') }}</UiBadge>
      </div>
      <AlignJustify
        v-else
        :class="$style.icon_menu"
        :style="{ marginTop: isExpanded ? '0px' : '3px' }"
        @click="emit('onToggle')"
      />
      <ArrowsDouble v-show="isExpanded" :class="$style.icon" @click="emit('onToggle')" />
    </div>
    <div :class="$style.content">
      <div>
        <SearchFilter :is-expanded @on-toggle="emit('onToggle')" />
        <WorkSpace :links :is-expanded />
        <ProjectsList :boards :is-expanded />
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

    .icon_menu {
      color: var(--zinc-800);
      cursor: pointer;
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
}

:global(.dark) {
  .sidebar {
    background-color: rgba(var(--zinc-rgb-800), 0.5);
    border-color: var(--dark-border);
    .name {
      .icon_menu {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
