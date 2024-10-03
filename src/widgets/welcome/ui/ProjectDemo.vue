<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { ProjectGrid } from '@/shared/assets/icons';

const isDark = useDark();
</script>

<template>
  <div :class="$style.wrapper">
    <ProjectGrid />
    <div :class="$style.img_container">
      <img loading="lazy" decoding="async" :src="isDark ? '/dev/dev-dark.png' : '/dev/dev.png'" />
    </div>
  </div>
</template>

<style lang="scss" module>
.wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));

  .img_container {
    position: relative;
    justify-self: center;
    width: 100%;
    grid-area: 1 / 1 / 1 / 1;
    max-width: 70%;
    transform: translateY(-1%);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    border-radius: 12px;

    & > img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
}
</style>
