<script setup lang="ts">
// @ts-expect-error missing type
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import { computed, ref } from 'vue';
import { AppSidebar, HeaderMain } from '@/widgets/layout';
import { useLocalStorage } from '@vueuse/core';
import { RouteNames } from '@/shared/config/consts';
import { useWindowSize } from '@vueuse/core';
import { useExpanded } from '@/shared/lib/composables';
import type { Board } from '@/entities/board';

const { width } = useWindowSize();

const isExpanded = useLocalStorage('isExpanded', true);
const transitionFl = ref<boolean>(false);

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
          : '5%';
});
const widthMainContainer = computed(() => {
  return `calc(100% - ${widthSidebar.value})`;
});

function onToggleArea() {
  isExpanded.value = !isExpanded.value;
  transitionFl.value = true;
}

const { createExpandedContext } = useExpanded();

createExpandedContext({
  isExpanded,
  onToggleArea
});

// mock -> after data from backend
//@ts-ignore
const boards = ref<Board[]>([
  { _id: '0', name: 'Startup Program', users: [], status: 'work', color: '#a1612a' },
  { _id: '1', name: 'Integrations', users: [], status: 'closed', color: '#45ad2d' }
]);
</script>

<template>
  <Splitpanes :class="$style.default_layout">
    <Pane
      min-size="4"
      max-size="18"
      :size="widthSidebar"
      :style="{ transition: transitionFl && 'width .2s ease-out' }"
    >
      <AppSidebar :boards />
    </Pane>
    <Pane :size="widthMainContainer">
      <div :class="$style.main_part">
        <HeaderMain :projects="boards" />
        <div
          :class="$style.slot_wrapper"
          :style="{ padding: $route.name !== RouteNames.board ? '20px 20px 20px 30px' : '0' }"
        >
          <slot />
        </div>
      </div>
    </Pane>
  </Splitpanes>
</template>

<style module lang="scss">
.default_layout {
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  width: 100%;
  height: 100dvh;

  .main_part {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;

    .slot_wrapper {
      background-color: var(--main-slotted);
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
}

.new_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 15px;
  width: 100%;
  background-color: var(--zinc-50);
}
</style>
