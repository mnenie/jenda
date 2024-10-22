<script setup lang="ts">
import { computed, ref } from 'vue';
import { links } from '../../model';
import { SearchFilter } from '@/features/filter';
import { PlanCard } from '@/features/plan';
import WorkSpace from './WorkSpace.vue';
import ProjectsList from './ProjectsList.vue';
import type { Board } from '@/entities/board';
import WorkspaceChooser from './WorkSpaceChooser.vue';
import { useExpanded } from '@/shared/lib/composables';

const expanded = useExpanded();

const { isExpanded } = expanded.getExpanded();

const paddingExpanded = computed(() => {
  return isExpanded.value ? '10px' : '0px 10px 10px 10px';
});

// mock -> after data from backend
//@ts-ignore
const boards = ref<Board[]>([
  { _id: '0', name: 'Startup Program', users: [], status: 'work', color: '#a1612a' },
  { _id: '1', name: 'Integrations', users: [], status: 'closed', color: '#45ad2d' }
]);
</script>

<template>
  <nav :class="$style.sidebar">
    <WorkspaceChooser />
    <div :class="$style.content" :style="{ padding: paddingExpanded }">
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
  background-color: var(--sidebar-bg-color);
  user-select: none;
  border-right: 1.5px solid var(--zinc-200);

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
