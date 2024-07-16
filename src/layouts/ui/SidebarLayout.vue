<script setup lang="ts">
// @ts-expect-error missing type
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import { computed, ref } from 'vue';
import { Sidebar, HeaderMain } from '@/widgets/layout';
import { useLocalStorage } from '@vueuse/core';

const isExpanded = useLocalStorage('isExpanded', true);
const transitionFl = ref(false);

const widthSidebar = computed(() => {
  return isExpanded.value ? '22%' : '4%';
});
const widthMainContainer = computed(() => {
  return `calc(100% - ${widthSidebar.value})`;
});
const onToggleArea = () => {
  isExpanded.value = !isExpanded.value;
  transitionFl.value = true;
};
</script>

<template>
  <Splitpanes :class="$style.sidebar_layout">
    <Pane
      min-size="4"
      max-size="22"
      :size="widthSidebar"
      :style="{ transition: transitionFl && 'width .2s ease-out' }"
    >
      <Sidebar :is-expanded @on-toggle="onToggleArea" />
    </Pane>
    <Pane :size="widthMainContainer">
      <div :class="$style.main_part">
        <HeaderMain />
        <div :class="$style.slot">
          <slot />
        </div>
      </div>
    </Pane>
  </Splitpanes>
</template>

<style module lang="scss">
.sidebar_layout {
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  width: 100%;
  height: 100dvh;

  .main_part {
    display: flex;
    flex-direction: column;
    height: 100%;

    .slot {
      background-color: var(--zinc-50);
      padding: 30px 45px;
      height: 100%;
      width: 100%;
    }
  }
}

:global(.dark) {
  .sidebar_layout {
    .main_part {
      .slot {
        background-color: var(--zinc-700);
      }
    }
  }
}
</style>
