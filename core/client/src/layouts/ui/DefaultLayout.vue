<script setup lang="ts">
import type { Board } from '@/entities/board'
import { RouteNames } from '@/shared/config/consts'
import { useExpanded } from '@/shared/lib/composables'
import { AppSidebar, HeaderMain } from '@/widgets/layout'
import { useLocalStorage, useWindowSize } from '@vueuse/core'

// @ts-expect-error missing type
import { Pane, Splitpanes } from 'splitpanes'
import { computed, ref } from 'vue'
import 'splitpanes/dist/splitpanes.css'

const { width } = useWindowSize()

const isExpanded = useLocalStorage('isExpanded', true)
const transitionFl = ref<boolean>(false)

const widthSidebar = computed(() => {
  return isExpanded.value
    ? width.value >= 1820
      ? '16%'
      : width.value >= 1400
        ? '22%'
        : '26%'
    : width.value >= 1820
      ? '3%'
      : width.value >= 1500
        ? '3.5%'
        : width.value >= 1380
          ? '4%'
          : '5%'
})
const widthMainContainer = computed(() => {
  return `calc(100% - ${widthSidebar.value})`
})

function onToggleArea() {
  isExpanded.value = !isExpanded.value
  transitionFl.value = true
}

const { createExpandedContext } = useExpanded()

createExpandedContext({
  isExpanded,
  onToggleArea,
})

// mock -> after data from backend
// @ts-ignore
const boards = ref<Board[]>([
  { _id: '0', name: 'Startup Program', users: [], status: 'work', color: '#a1612a' },
  { _id: '1', name: 'Integrations', users: [], status: 'closed', color: '#45ad2d' },
])
</script>

<template>
  <Splitpanes class="flex flex-row flex-1 w-full h-dvh">
    <Pane
      min-size="4"
      max-size="18"
      :size="widthSidebar"
      :style="{ transition: transitionFl && 'width .2s ease-out' }"
    >
      <AppSidebar :boards />
    </Pane>
    <Pane :size="widthMainContainer">
      <div class="flex flex-col h-full overflow-hidden">
        <HeaderMain :projects="boards" />
        <div
          class="relative h-full w-full bg-main"
          :style="{ padding: $route.name !== RouteNames.board ? '20px' : '0' }"
        >
          <slot />
        </div>
      </div>
    </Pane>
  </Splitpanes>
</template>
