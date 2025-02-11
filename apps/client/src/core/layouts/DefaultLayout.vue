<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
// @ts-expect-error missing type
import { Pane, Splitpanes } from 'splitpanes'
import AppSidebar from '../components/sidebar/AppSidebar.vue'
import HeaderMain from '../components/headers/HeaderMain.vue'
import { provideExpandedContext } from '@/shared/composables/expanded'

import 'splitpanes/dist/splitpanes.css'

const isExpanded = useLocalStorage('isExpanded', true)
const transitionFl = ref<boolean>(false)

const sidebarSize = computed(() => isExpanded.value ? '275' : '58')

function onToggleArea() {
  isExpanded.value = !isExpanded.value
  transitionFl.value = true
}

provideExpandedContext({
  isExpanded,
  onToggleArea,
})
</script>

<template>
  <Splitpanes class="flex flex-row flex-1 overflow-hidden !w-full !h-dvh">
    <Pane
      style="flex: none"
      :style="{ transition: transitionFl && 'all .2s ease-out', width: `${sidebarSize}px` }"
    >
      <AppSidebar />
    </Pane>
    <Pane style="width: 100%;">
      <div class="flex flex-col h-full overflow-hidden w-full">
        <HeaderMain />
        <div
          class="relative h-full w-full !bg-main"
          :style="{
            padding: ($route.name !== 'boards-id' && $route.name !== 'workflows-id') ? '12px 20px 12px 20px' : '0',
          }"
        >
          <slot />
        </div>
      </div>
    </Pane>
  </Splitpanes>
</template>
