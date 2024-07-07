<script setup lang="ts">
import { Sidebar, HeaderMain } from '@/widgets/layout';
</script>

<template>
  <div :class="$style.sidebar_layout">
    <Sidebar />
    <div :class="$style.main_part">
      <HeaderMain />
      <div :class="$style.slot">
        <slot />
      </div>
    </div>
  </div>
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
    width: calc(100% - 260px);

    .slot {
      background-color: var(--zinc-50);
      padding: 30px 45px;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
