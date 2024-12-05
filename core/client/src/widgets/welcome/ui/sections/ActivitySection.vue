<script setup lang="ts">
import { useDark, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark()

const { width } = useWindowSize()

const iconSize = computed(() => (width.value >= 1100 ? 36 : 30))
</script>

<template>
  <div
    id="activity"
    class="flex flex-col gap-8 w-full mb-100px max-[1100px]:items-center max-[520px]:mb-80px"
  >
    <div class="flex items-start gap-5 w-full">
      <span
        v-show="width > 768"
        i-hugeicons-chart-evaluation
        class="mt-2 text-neutral-700 dark:text-neutral-500"
        :style="{ fontSize: `${iconSize}px` }"
      />
      <div class="flex flex-col w-full text-left max-[768px]:text-center">
        <h2
          class="text-38px mb-30px font-semibold
          max-[1152px]:text-34px max-[1100px]:!text-32px max-[520px]:!text-28px dark:text-neutral-100"
        >
          {{ $t('welcome.activity.heading') }}
        </h2>
        <p
          class="text-base max-w-90% max-[768px]:max-w-full max-[768px]:text-center dark:text-neutral-200"
        >
          {{ $t('welcome.activity.about') }}
        </p>
      </div>
    </div>
    <section
      class="grid grid-cols-2 gap-5 px-7 items-center justify-between
      max-[1100px]:grid-cols-1 max-[1100px]:max-w-640px max-[768px]:max-w-500px max-[520px]:max-w-none max-[520px]:px-0"
    >
      <img
        :src="isDark ? '/dev/dev-card-section-dark.png' : '/dev/dev-card-section.png'"
        class="w-full h-full"
        loading="lazy"
        decoding="async"
      />
      <img
        :src="isDark ? '/dev/dev-card-section-dark.png' : '/dev/dev-card-section.png'"
        class="w-full h-full"
        loading="lazy"
        decoding="async"
      />
    </section>
  </div>
</template>
