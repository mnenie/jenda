<script setup lang="ts">
import { computed } from 'vue'
import { refDebounced } from '@vueuse/core'
import { links } from '../../constants/sidebar'
import InfoMenu from './dropdowns/InfoMenu.vue'
import IntegrationItems from './links/IntegrationItems.vue'
import WorkSpace from './WorkSpace.vue'
import WorkspaceChooser from './WorkSpaceChooser.vue'
import PlanCard from './plan/PlanCard.vue'
import BoardsRows from './boards/BoardsList.vue'
import NotificationsMenu from './dropdowns/NotificationsMenu.vue'
import SettingsLink from './links/SettingsLink.vue'
import SearchBox from '@/modules/search/components/SearchBox.vue'
import { useExpandedContext } from '@/shared/composables/expanded'

const { isExpanded } = useExpandedContext()

const debounced = refDebounced(isExpanded, 20)

const isShowPlan = computed((): boolean => {
  return isExpanded.value ? debounced.value : false
})

const paddingExpanded = computed(() => {
  return isExpanded.value ? '10px 10px 6px 10px' : '0px 10px 6px 10px'
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
        <SearchBox />
        <NotificationsMenu />
        <WorkSpace :links />
        <BoardsRows />
        <IntegrationItems />
      </div>
      <div>
        <InfoMenu />
        <SettingsLink />
        <PlanCard :is-show-plan />
      </div>
    </div>
  </div>
</template>
