<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDark, useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { redirect } from '@/shared/helpers'
import { UiButton } from '@/shared/ui'

const { t } = useI18n()
const { width } = useWindowSize()

const badge = computed(() =>
  width.value > 668 ? t('welcome.about.badge') : t('welcome.about.badge_mobile'),
)

const isDark = useDark()

const isHovered = ref(false)

function onMouseEnter() {
  isHovered.value = true
}
function onMouseLeave() {
  isHovered.value = false
}
const arrowMargin = computed(() => {
  return isHovered.value ? '4px' : '0px'
})
</script>

<template>
  <section
    id="about"
    class="flex flex-col items-center py-0 px-1 gap-1 my-0 mx-auto max-w-980px max-[520px]:gap-2"
  >
    <div
      class="bg-neutral-100 text-neutral-500 flex items-center gap-1 px-2.5 py-0.5 rounded-lg cursor-pointer dark:bg-neutral-700 dark:text-neutral-400
      max-[520px]:mb-4 max-[520px]:justify-center"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @click="redirect('https://github.com/mnenie/jenda')"
    >
      <span style="margin-right: 3px">✨</span>
      <span class="text-sm">{{ badge }}</span>
      <span
        i-hugeicons-arrow-right-01
        class="ease-in duration-100"
        :style="{ marginLeft: arrowMargin }"
      />
    </div>
    <h1
      class="
      text-76px leading-tight font-semibold mb-1 text-center tracking-tighter
      max-[1220px]:text-68px max-[1152px]:text-64px max-[1100px]:text-62px max-[890px]:text-54px max-[680px]:!text-44px"
    >
      {{ $t('welcome.about.tagline') }}
    </h1>
    <p
      class="text-lg max-w-600px text-center text-neutral-500 dark:text-neutral-400
      max-[680px]:(max-w-480px text-base)"
    >
      {{ $t('welcome.about.description') }}
    </p>
    <div class="flex justify-center items-center gap-4 px-0 py-4 btns">
      <UiButton @click="$router.push({ name: 'sign-up' })">
        {{ $t('welcome.about.btn') }}
      </UiButton>
      <UiButton
        variant="outline"
        @click="redirect('https://github.com/mnenie/jenda')"
      >
        <img
          :src="!isDark ? '/icons/github.png' : '/icons/github-d.png'"
          class="w-4 h-4"
        />
        GitHub
      </UiButton>
    </div>
  </section>
</template>
