<script setup lang="ts">
// @ts-expect-error missing type
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import { computed, ref } from 'vue';
import { AppSidebar, HeaderMain } from '@/widgets/layout';
import { useLocalStorage } from '@vueuse/core';
import { RouteNames } from '@/shared/config/consts';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const isExpanded = useLocalStorage('isExpanded', true);
const transitionFl = ref<boolean>(false);

const widthSidebar = computed(() => {
  return isExpanded.value
    ? width.value >= 1820
      ? '18%'
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

function onToggleArea () {
  isExpanded.value = !isExpanded.value;
  transitionFl.value = true;
}
</script>

<template>
  <Splitpanes :class="$style.default_layout">
    <Pane
      min-size="4"
      max-size="18"
      :size="widthSidebar"
      :style="{ transition: transitionFl && 'width .2s ease-out' }"
    >
      <AppSidebar :is-expanded @on-toggle="onToggleArea" />
    </Pane>
    <Pane :size="widthMainContainer">
      <div :class="$style.main_part">
        <HeaderMain />
        <div :class="$style.slot" :style="{ padding: $route.name !== RouteNames.board ? '30px 45px' : '0' }">
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
    height: 100%;

    .slot {
      background-color: var(--zinc-50);
      position: relative;
      padding: 30px 45px;
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

:global(.dark) {
  .default_layout {
    .main_part {
      .slot {
        background-color: var(--zinc-700);
      }
    }
  }
}
</style>
