<script setup lang="ts">
import type { CardItem } from './CardItem.vue'
import { imgs } from '~/constants/cards'

const { tm, rt, t } = useI18n()

const cards = computed(() => {
  const tmArr = tm('features.cards') as CardItem[]
  return tmArr.map((item, index) => ({
    title: item.title,
    description: item.description,
    ...imgs[index],
  }))
})
</script>

<template>
  <CommonHorizontalSectionWrapper
    :badge="{ label: t('features.badge'), icon: 'i-lucide-rocket' }"
    :title="$t('features.title')"
    :description="$t('features.description')"
    class="px-36"
  >
    <div class="w-full flex flex-col items-start gap-4">
      <div class="w-full grid grid-cols-3 gap-4 auto-rows-fr">
        <Motion
          v-for="(card, index) in cards"
          :key="card.title"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.1 * index }"
          :in-view-options="{ once: true }"
          :class="{
            'row-span-2': index === 2,
          }"
        >
          <FeaturesCardItem
            :card="{ ...card, title: rt(card.title), description: rt(card.description) }"
            class="h-full"
          />
        </Motion>
      </div>
    </div>
  </CommonHorizontalSectionWrapper>
</template>
