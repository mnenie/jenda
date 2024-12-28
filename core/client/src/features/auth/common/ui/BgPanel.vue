<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useWindowSize } from '@vueuse/core'
import useTextChanging from '../model/composables/useTextChanging'
import { reviews } from '../model/fixtures'

const { currentIndex } = useTextChanging(reviews)

const isDark = useDark()
const imgBlockquote = computed(() => {
  return isDark.value ? '/icons/blockquote-dark.png' : '/icons/blockquote-light.png'
})

const { width } = useWindowSize()
</script>

<template>
  <div
    v-if="width > 1100"
    class="relative h-full w-full flex items-center justify-center gap-12px overflow-hidden bg-neutral-100 dark:bg-neutral-900
    max-[1440px]:(py-0 pl-100px pr-80px)"
  >
    <div class="relative z-99 flex flex-col gap-24px">
      <blockquote class="relative z-99 text-28px max-w-42rem dark:text-neutral-100 max-[1280px]:text-24px">
        <img
          :src="imgBlockquote"
          class="absolute top--24px left--40px w-60px z--1"
        />
        {{ reviews[currentIndex].text }}
      </blockquote>
      <div class="flex items-center gap-12px">
        <img
          src="https://avatars.githubusercontent.com/u/121057011?v=4"
          :alt="reviews[currentIndex].author"
          class="w-38px h-38px rounded-50%"
        />
        <div class="flex">
          <cite
            class="text-base whitespace-nowrap font-medium not-italic dark:text-neutral-200"
          >
            {{ reviews[currentIndex].author }}
          </cite>
        </div>
      </div>
    </div>
  </div>
</template>
