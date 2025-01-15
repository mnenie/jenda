<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import type { SectionWrapperType } from '../../types'

const { section, direction = 'default', id } = defineProps<{
  section: SectionWrapperType
  direction?: 'default' | 'reverse'
  id: string
}>()

const { locale } = useI18n()

const { width } = useWindowSize()

const writerKey = ref(0)

const sectionDirection = computed(() =>
  width.value >= 1100 ? (direction === 'default' ? 'row' : 'row-reverse') : 'column',
)
const iconSize = computed(() => (width.value >= 1100 ? 36 : 30))

watch([() => section.writer, locale], () => {
  writerKey.value++
})
</script>

<template>
  <div :id class="w-full flex flex-col gap-10 mb-60px max-[768px]:gap-25px">
    <div class="flex items-center gap-5 max-[768px]:justify-center">
      <div v-show="width > 520" class="text-neutral-700 dark:text-neutral-400">
        <slot
          name="icon"
          :size="iconSize"
        />
      </div>
      <h2
        class="text-38px font-semibold dark:text-neutral-100
        max-[1152px]:text-34px max-[1100px]:!text-32px max-[520px]:text-center max-[520px]:!text-28px"
      >
        {{ section.name }}
      </h2>
    </div>
    <section
      :style="{ flexDirection: sectionDirection }"
      class="flex justify-between items-center gap-11 py-0 px-30px max-[768px]:gap-30px max-[520px]:p-0"
    >
      <slot name="content">
        <div class="max-[1220px]:min-w-390px max-[520px]:min-w-unset">
          <h4
            class="text-2xl font-semibold mb-30px dark:text-neutral-100
            max-[768px]:text-center max-[768px]:mb-20px max-[768px]:text-xl"
          >
            {{ section.heading }}
          </h4>
          <p
            class="text-base max-w-696px mb-50px dark:text-neutral-300
            max-[768px]:text-center max-[768px]:mb-20px max-[768px]:max-w-full"
          >
            {{ section.about }}
          </p>
          <VueWriter
            :key="writerKey"
            :array="[section.writer]"
            class="text-sm text-neutral-400 dark:text-neutral-300 max-[768px]:text-center"
          />
        </div>
        <img
          :src="section.img"
          loading="lazy"
          decoding="async"
          class="max-w-600px w-full rounded-lg max-[1220px]:max-w-500px"
        />
      </slot>
    </section>
  </div>
</template>
