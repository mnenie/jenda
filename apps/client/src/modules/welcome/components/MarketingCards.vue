<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useCards } from '../composables/cards'
import type { MarketingCard } from '../types'
import { UiCard } from '@/shared/ui'

const { tm, t } = useI18n()

const { width } = useWindowSize()

const { cards: _cards } = useCards()

const cards = computed(() => {
  const tmArr = tm('welcome.marketing.cards') as MarketingCard[]
  const _arr = computed<MarketingCard[]>(() => {
    return width.value >= 1220 ? tmArr : tmArr.filter((_, i) => i !== 2)
  })
  return _cards.value.map((card, i) => ({
    ...card,
    title: _arr.value[i]?.title,
    description: _arr.value[i]?.description,
  }))
})

const colors = [
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
] as const

const isDark = useDark()

const getCurrentColor = computed(() => {
  return (id: number) => {
    return !isDark.value ? colors[id].light : colors[id].dark
  }
})

const currentWidth = computed(() => {
  return (width: string | undefined) => {
    return width ? `${width}px` : '100%'
  }
})
const currentHeight = computed(() => {
  return (height: string | undefined) => {
    return height ? `${height}px` : '100%'
  }
})

const getImageAttributes = computed(() => {
  return (card: MarketingCard) => {
    const attributesObj = {
      width: card.imgWidth,
      bottom: card.bottom,
      top: card.top,
      right: card.right,
      left: card.left,
    }
    return attributesObj
  }
})

const getMaxWidth = computed(() => {
  return (card: MarketingCard) => {
    return width.value < 1220 ? card.maxWidth : ''
  }
})
const iconSize = computed(() => (width.value >= 1100 ? 36 : 30))
</script>

<template>
  <div class="w-full flex flex-col gap-10 mb-110px max-[520px]:mb-80px max-[680px]:gap-6">
    <div class="flex items-center gap-5 max-[768px]:justify-center">
      <span
        v-show="width > 520"
        i-hugeicons-atom-01
        :style="{ fontSize: `${iconSize}px` }"
        class="text-neutral-700 dark:text-neutral-400"
      />
      <h2
        class="text-38px font-semibold dark:text-neutral-100
        max-[1152px]:text-34px max-[1100px]:!text-32px max-[520px]:(text-center !text-28px)"
      >
        {{ t('welcome.marketing.heading') }}
      </h2>
    </div>
    <section class="flex px-7 gap-5 max-[680px]:(flex-col) max-[520px]:p-0">
      <div class="combined-card">
        <UiCard
          v-for="card in cards.slice(0, 2)"
          :key="card.id"
          class="card"
          :style="{
            paddingRight: card.id === 1 && '40px',
            backgroundColor: getCurrentColor(card.id),
            maxWidth: currentWidth(card.width),
            height: width >= 1220 ? currentHeight(card.height) : '280px',
          }"
        >
          <div>
            <h3 class="text-2xl font-semibold mb-2 dark:text-neutral-100 max-[680px]:text-xl">
              {{ card.title }}
            </h3>
            <p class="text-base text-neutral-400 dark:text-neutral-200 max-[1220px]:mr-5">
              {{ card.description }}
            </p>
          </div>
          <img
            :src="card.url"
            :style="{ ...getImageAttributes(card), maxWidth: getMaxWidth(card) }"
            class="absolute rounded-lg max-w-unset
            max-[1220px]:(static h-unset !w-full mb--5px self-end justify-self-end) max-[680px]:!max-w-300px"
          />
        </UiCard>
      </div>
      <div class="combined-card">
        <UiCard
          v-for="card in cards.slice(2, 4)"
          :key="card.id"
          class="card"
          :style="{
            backgroundColor: getCurrentColor(card.id),
            maxWidth: currentWidth(card.width),
            height: currentHeight(card.height),
          }"
        >
          <div>
            <h3 class="text-2xl font-semibold mb-2 dark:text-neutral-100 max-[680px]:text-xl">
              {{ card.title }}
            </h3>
            <p class="text-base text-neutral-400 dark:text-neutral-200 max-[1220px]:mr-5">
              {{ card.description }}
            </p>
          </div>
          <img
            :src="card.url"
            :style="{ ...getImageAttributes(card), maxWidth: getMaxWidth(card) }"
            class="absolute rounded-lg max-w-unset
            max-[1220px]:(static h-unset !w-full mb--5px self-end justify-self-end) max-[680px]:!max-w-300px"
          />
        </UiCard>
      </div>
      <div v-if="width >= 1220 && cards.length >= 5" class="combined-card">
        <UiCard
          :key="cards[4].id"
          class="card"
          :style="{
            backgroundColor: getCurrentColor(cards[4].id),
            maxWidth: currentWidth(cards[4].width),
          }"
        >
          <div>
            <h3 class="text-2xl font-semibold mb-2 dark:text-neutral-100 max-[680px]:text-xl">
              {{ cards[4].title }}
            </h3>
            <p class="text-base text-neutral-400 dark:text-neutral-200 max-[1220px]:mr-5">
              {{ cards[4].description }}
            </p>
          </div>
          <img
            :src="cards[4].url"
            :style="getImageAttributes(cards[4])"
            class="absolute rounded-lg max-w-unset
            max-[1220px]:(static h-unset !w-full mb--5px self-end justify-self-end) max-[680px]:!max-w-300px"
          />
        </UiCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.combined-card {
  @apply flex flex-col gap-5 grow max-[680px]:!mr-0;
}

.card {
  @apply p-5 shadow-sm relative overflow-hidden flex flex-col w-full grow
  max-[1220px]:(pt-5 pl-5 pr-0 pb-0 justify-between) max-[680px]:(!max-w-full !h-full gap-6);
}
</style>
