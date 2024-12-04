<script setup lang="ts">
import type { MarketingCard } from '../model'
import { UiCard } from '@/shared/ui'
import { useDark, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCards } from '../model/composables'

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
  <div :class="$style.wrapper">
    <div :class="$style.heading">
      <span
        v-show="width > 520"
        i-hugeicons-atom-01
        :style="{ fontSize: `${iconSize}px` }"
        :class="$style.icon"
      />
      <h2 class="heading-2">
        {{ t('welcome.marketing.heading') }}
      </h2>
    </div>
    <section>
      <div :class="$style.combinedCard">
        <UiCard
          v-for="card in cards.slice(0, 2)"
          :key="card.id"
          :class="$style.card"
          :style="{
            paddingRight: card.id === 1 && '40px',
            backgroundColor: getCurrentColor(card.id),
            maxWidth: currentWidth(card.width),
            height: width >= 1220 ? currentHeight(card.height) : '280px',
          }"
        >
          <div>
            <h3 class="heading-3">
              {{ card.title }}
            </h3>
            <p class="text-base">
              {{ card.description }}
            </p>
          </div>
          <img :src="card.url" :style="{ ...getImageAttributes(card), maxWidth: getMaxWidth(card) }" />
        </UiCard>
      </div>
      <div :class="$style.combinedCard">
        <UiCard
          v-for="card in cards.slice(2, 4)"
          :key="card.id"
          :class="$style.card"
          :style="{
            backgroundColor: getCurrentColor(card.id),
            maxWidth: currentWidth(card.width),
            height: currentHeight(card.height),
          }"
        >
          <div>
            <h3 class="heading-3">
              {{ card.title }}
            </h3>
            <p class="text-base">
              {{ card.description }}
            </p>
          </div>
          <img :src="card.url" :style="{ ...getImageAttributes(card), maxWidth: getMaxWidth(card) }" />
        </UiCard>
      </div>
      <div v-if="width >= 1220 && cards.length >= 5" :class="$style.combinedCard">
        <UiCard
          :key="cards[4].id"
          :class="[$style.card, $style.flexGrowCard]"
          :style="{
            backgroundColor: getCurrentColor(cards[4].id),
            maxWidth: currentWidth(cards[4].width),
          }"
        >
          <div>
            <h3 class="heading-3">
              {{ cards[4].title }}
            </h3>
            <p class="text-base">
              {{ cards[4].description }}
            </p>
          </div>
          <img :src="cards[4].url" :style="getImageAttributes(cards[4])" />
        </UiCard>
      </div>
    </section>
  </div>
</template>

<style module lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 110px;

  .heading {
    display: flex;
    align-items: center;
    gap: 20px;

    & > h2 {
      font-size: 40px;
    }

    .icon {
      color: var(--zinc-600);
    }
  }

  & > section {
    display: flex;
    padding: 0 30px;
  }
}

.combinedCard {
  gap: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.card {
  padding: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;

  & h3 {
    margin-bottom: 8px;
  }

  & p {
    color: var(--zinc-500);
  }

  & > img {
    position: absolute;
    border-radius: 8px;
  }
}

:global(html.dark) {
  .wrapper {
    .heading {
      & > h2 {
        color: var(--zinc-100);
      }
      .icon {
        color: var(--zinc-400);
      }
    }
  }
  .card {
    & h3 {
      color: var(--zinc-100);
    }
    & p {
      color: var(--zinc-200);
    }
  }
}

@media screen and (max-width: 1220px) {
  .wrapper {
    .heading {
      & > h2 {
        font-size: 38px;
      }
    }
  }
  .card {
    padding: 20px 0 0 20px;
    justify-content: space-between;
    & p {
      margin-right: 20px;
    }
    & > img {
      position: static;
      height: unset;
      width: 100% !important;
      margin-bottom: -5px;
      align-self: flex-end;
      justify-self: end;
    }
  }
}

@media screen and (max-width: 1152px) {
  .wrapper {
    .heading {
      & > h2 {
        font-size: 34px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .wrapper {
    .heading {
      & > h2 {
        font-size: 32px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    .heading {
      justify-content: center;
    }
  }
}

@media screen and (max-width: 680px) {
  .wrapper {
    & > section {
      flex-direction: column;
      gap: 20px;
    }
  }
  .combinedCard {
    margin-right: 0 !important;
  }
  .card {
    & p {
      margin-bottom: 20px;
    }
    max-width: 100% !important;
    height: 100% !important;

    & > img {
      max-width: 300px !important;
    }
  }
}

@media screen and (max-width: 520px) {
  .wrapper {
    margin-bottom: 80px;

    .heading {
      & h2 {
        font-size: 28px;
        text-align: center;
      }
    }

    & > section {
      padding: 0;
    }
  }
}
</style>
