<script setup lang="ts">
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { _cards } from '../config/cards';
import type { MarketingCard } from '../types';
import { UiCard } from '@/shared/ui';

const { tm } = useI18n();

const cards = computed(() => {
  const localeArr = tm('welcome.cards') as MarketingCard[];
  return _cards.map((card, i) => ({
    ...card,
    title: localeArr[i].title,
    description: localeArr[i].description
  }));
});

const colors = [
  { light: '#fff9f3', dark: '#2b2723' },
  { light: '#fbfbfc', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#f7f9fe', dark: '#232527' },
  { light: '#fef7f9', dark: '#302528' },
  { light: '#fbfbfc', dark: 'rgba(var(--zinc-rgb-600), 0.2)' }
];

const isDark = useDark();

const getCurrentColor = computed(() => {
  return (id: number) => {
    return !isDark.value ? colors[id].light : colors[id].dark;
  };
});

const currentWidth = computed(() => {
  return (width: string | undefined) => {
    return width ? width + 'px' : '100%';
  };
});
const currentHeight = computed(() => {
  return (height: string | undefined) => {
    return height ? height + 'px' : '100%';
  };
});
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.combinedCard">
      <UiCard
        v-for="card in cards.slice(0, 2)"
        :key="card.id"
        :class="$style.card"
        :style="{
          backgroundColor: getCurrentColor(card.id),
          maxWidth: currentWidth(card.width),
          height: currentHeight(card.height)
        }"
      >
        <h3 class="heading-3">{{ card.title }}</h3>
        <p class="text-base">{{ card.description }}</p>
        <img :src="isDark ? '/kanban-d.png' : '/kanban.png'" />
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
          height: currentHeight(card.height)
        }"
      >
        <h3 class="heading-3">{{ card.title }}</h3>
        <p class="text-base">{{ card.description }}</p>
        <img :src="isDark ? '/kanban-d.png' : '/kanban.png'" />
      </UiCard>
    </div>
    <div :class="$style.combinedCard">
      <UiCard
        :key="cards[4].id"
        :class="[$style.card, $style.flexGrowCard]"
        :style="{
          backgroundColor: getCurrentColor(cards[4].id),
          maxWidth: currentWidth(cards[4].width),
        }"
      >
        <h3 class="heading-3">{{ cards[4].title }}</h3>
        <p class="text-base">{{ cards[4].description }}</p>
        <img :src="isDark ? '/kanban-d.png' : '/kanban.png'" />
      </UiCard>
    </div>
  </div>
</template>

<style module lang="scss">
.wrapper {
  display: flex;
  margin: 70px 0 80px 0;
  width: 100%;
}

.combinedCard {
  gap: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

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

  & > h3 {
    margin-bottom: 8px;
  }

  & > p {
    color: var(--zinc-500);
  }

  & > img {
    position: absolute;
    bottom: -260px;
    right: -360px;
    width: 720px;
    border-radius: 8px;
  }
}

:global(html.dark) {
  .card {
    & > p {
      color: var(--zinc-300);
    }
    & > img {
      border: 1px solid var(--zinc-700);
    }
  }
}
</style>
