<script setup lang="ts">
import type { Board } from '@/entities/board'
import { RouteNames } from '@/shared/config/consts'
import { useExpanded } from '@/shared/lib/composables'
import { AppSidebar, HeaderMain } from '@/widgets/layout'
import { useLocalStorage } from '@vueuse/core'

// @ts-expect-error missing type
import { Pane, Splitpanes } from 'splitpanes'
import { computed, ref } from 'vue'
import 'splitpanes/dist/splitpanes.css'

const isExpanded = useLocalStorage('isExpanded', true)
const transitionFl = ref<boolean>(false)

const sidebarSize = computed(() => isExpanded.value ? '286' : '58')

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
  <Splitpanes class="flex flex-row flex-1 overflow-hidden w-full h-dvh">
    <Pane
      style="flex: none"
      :style="{ transition: transitionFl && 'all .2s ease-out', width: `${sidebarSize}px` }"
    >
      <AppSidebar :boards />
    </Pane>
    <Pane style="width: 100%;">
      <div class="flex flex-col h-full overflow-hidden w-full">
        <HeaderMain :projects="boards" />
        <div
          class="relative h-full w-full !bg-main"
          :style="{ padding: $route.name !== RouteNames.board ? '12px 20px 20px 20px' : '0' }"
        >
          <slot />
        </div>
      </div>
    </Pane>
  </Splitpanes>
</template>
