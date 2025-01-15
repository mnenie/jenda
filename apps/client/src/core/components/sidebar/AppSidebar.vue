<script setup lang="ts">
import { computed } from 'vue'
import { refDebounced } from '@vueuse/core'
import InfoMenu from './InfoMenu.vue'
import IntegrationItems from './IntegrationItems.vue'
import ProjectsList from './ProjectsList.vue'
import WorkSpace from './WorkSpace.vue'
import WorkspaceChooser from './WorkSpaceChooser.vue'
import PlanCard from './plan/PlanCard.vue'
import type { Board } from '@/modules/boards/types'
import { links } from '@/shared/constants/links'
import SearchBox from '@/modules/search/components/SearchBox.vue'
import { useExpandedContext } from '@/shared/composables/expanded'

defineProps<{
  boards: Board[]
}>()

const { isExpanded } = useExpandedContext()

const debounced = refDebounced(isExpanded, 20)

const isShowPlan = computed((): boolean => {
  return isExpanded.value ? debounced.value : false
})

const paddingExpanded = computed(() => {
  return isExpanded.value ? '10px' : '0px 10px 10px 10px'
})
</script>

<template>
  <div class="relative w-full flex flex-col h-full bg-sidebar select-none border-r border-r-solid border-layout">
    <WorkspaceChooser />
    <div
      class="flex flex-col justify-between h-full mt-0.5"
      :style="{ padding: paddingExpanded }"
    >
      <div>
        <SearchBox :boards />
        <WorkSpace :links />
        <IntegrationItems />
        <ProjectsList :boards />
      </div>
      <div>
        <InfoMenu :is-show-plan />
        <PlanCard :is-show-plan />
      </div>
    </div>
  </div>
</template>
