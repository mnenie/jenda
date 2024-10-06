<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { ProjectGrid } from '@/shared/assets/icons';
import { computed } from 'vue';

const isDark = useDark();

const imgUrl = computed(() => isDark.value ? '/dev/dev-dark.png' : '/dev/dev.png')
</script>

<template>
  <div :class="$style.wrapper">
    <ProjectGrid />
    <div :class="$style.img_container">
      <img decoding="async" :src="imgUrl" />
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
    display: flex;
    align-items: center;
    width: 100%;
    grid-area: 1 / 1 / 1 / 1;
    max-width: 70%;
    transform: translateY(-1%);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    border-radius: 12px;
    height: 300px;

    & > img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
}

@media screen and (max-width: 890px) {
  .wrapper{
    .img_container{
      max-width: 80%;
    }
  }
}

@media screen and (max-width: 680px) {
  .wrapper{
    .img_container{
      height: fit-content;
    }
  }
}

@media screen and (max-width: 520px) {
  .wrapper{
    .img_container{
      max-width: 90%;
    }
  }
}

@media screen and (max-width: 420px) {
  .wrapper{
    margin-top: 50px;
  }
}
</style>
