<script setup lang="ts">
import { ProjectGrid } from '@/shared/assets/icons'
</script>

<template>
  <div class="overflow-hidden relative w-full mt-30px grid grid-cols-1 grid-rows-1 items-center">
    <ProjectGrid />
    <div
      class="relative flex justify-self-center w-full items-center max-w-70% -translate-y-1% img_container rounded-md h-300px
      max-[890px]:max-w-80% max-[680px]:h-fit max-[520px]:!max-w-96% max-[420px]:!mt-20px"
    >
      <img
        decoding="async"
        src="/dev/dev-dark.png"
        class="max-w-full h-auto rounded-md light:hidden"
      />
      <img
        decoding="async"
        src="/dev/dev.png"
        class="max-w-full h-auto rounded-md dark:hidden"
      />
    </div>
  </div>
</template>

<style scoped>
.img_container {
  grid-area: 1 / 1 / 1 / 1;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
