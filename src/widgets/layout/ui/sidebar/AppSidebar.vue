<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { links } from '../../model';
import { SearchFilter } from '@/features/filter';
import { PlanCard } from '@/features/plan';
import WorkSpace from './WorkSpace.vue';
import ProjectsList from './ProjectsList.vue';
import type { Board } from '@/entities/board';
import WorkspaceChooser from './WorkspaceChooser.vue';
import { useExpanded } from '@/shared/lib/composables';

const expanded = useExpanded();

const { isExpanded } = expanded.getExpanded();

const contentPosition = computed(() => {
  return isExpanded.value ? 'space-between' : 'center';
});
const paddingExpanded = computed(() => {
  return isExpanded.value ? '10px 15px 12px 15px' : '10px';
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
  <nav :class="$style.sidebar">
    <WorkspaceChooser />
    <div :class="$style.content">
      <div>
        <SearchFilter />
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
  background-color: #fafafa;
  user-select: none;
  border-right: 1.5px solid var(--zinc-200);

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
    padding: 10.12px;
    margin-top: 6px;

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
    border-color: var(--dark-border);
    .name {
      .icon_menu {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
