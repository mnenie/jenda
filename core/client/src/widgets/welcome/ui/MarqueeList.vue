<template>
  <div class="w-full h-60px mt-80px mx-0 mb-150px max-[890px]:my-80px max-[520px]:!my-60px">
    <Vue3Marquee>
      <div
        v-for="(s, index) in $tm('welcome.marquee')"
        :key="index"
        class="flex items-center mr-68px"
      >
        <p class="text-lg dark:text-neutral-100">
          {{ s }}
        </p>
      </div>
    </Vue3Marquee>
  </div>
</template>
