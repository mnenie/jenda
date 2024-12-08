<script setup lang="ts">
import type { Board } from '@/entities/board'
import { PlanCard } from '@/features/plan'
import { useExpanded } from '@/shared/lib/composables'
import { computed } from 'vue'
import { links } from '../../model'
import ProjectsList from './ProjectsList.vue'
import SearchBox from './SearchBox.vue'
import WorkSpace from './WorkSpace.vue'
import WorkspaceChooser from './WorkSpaceChooser.vue'

defineProps<{
  boards: Board[]
}>()

const expanded = useExpanded()

const { isExpanded } = expanded.getExpanded()

const paddingExpanded = computed(() => {
  return isExpanded.value ? '10px' : '0px 10px 10px 10px'
})
</script>

<template>
  <div class="relative w-full flex flex-col h-full bg-sidebar select-none border-r border-r-solid border-layout">
    <WorkspaceChooser />
    <div class="flex flex-col justify-between h-full mt-1.5" :style="{ padding: paddingExpanded }">
      <div>
        <SearchBox :boards />
        <WorkSpace :links :is-expanded />
        <ProjectsList :boards :is-expanded />
      </div>
      <PlanCard :is-expanded />
    </div>
  </div>
</template>
