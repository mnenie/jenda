<script setup lang="ts">
import { computed } from 'vue';
import { useDark, useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import type { MarketingCard } from '../model';
import { UiCard } from '@/shared/ui';
import { Package } from 'lucide-vue-next';
import { useCards } from '../model/composables';

const { tm, t } = useI18n();

const { width } = useWindowSize();

const { cards: _cards } = useCards();

const cards = computed(() => {
  const tmArr = tm('welcome.marketing.cards') as MarketingCard[];
  const _arr = computed<MarketingCard[]>(() => {
    return width.value >= 1152 ? tmArr : tmArr.filter((_, i) => i !== 2);
  });
  return _cards.value.map((card, i) => ({
    ...card,
    title: _arr.value[i]?.title,
    description: _arr.value[i]?.description
  }));
});

const colors = [
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' },
  { light: '#fff', dark: 'rgba(var(--zinc-rgb-600), 0.2)' }
] as const;

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

const getImageAttributes = computed(() => {
  return (card: MarketingCard) => {
    const attributesObj = {
      width: card.imgWidth,
      bottom: card.bottom,
      top: card.top,
      right: card.right,
      left: card.left
    };
    return attributesObj;
  };
});
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.heading">
      <Package :size="40" :class="$style.icon" />
      <h2 class="heading-2">{{ t('welcome.marketing.heading') }}</h2>
    </div>
    <section>
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
          <img :src="card.url" :style="getImageAttributes(card)" />
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
          <img :src="card.url" :style="getImageAttributes(card)" />
        </UiCard>
      </div>
      <div v-if="width >= 1152 && cards.length >= 5" :class="$style.combinedCard">
        <UiCard
          :key="cards[4].id"
          :class="[$style.card, $style.flexGrowCard]"
          :style="{
            backgroundColor: getCurrentColor(cards[4].id),
            maxWidth: currentWidth(cards[4].width)
          }"
        >
          <h3 class="heading-3">{{ cards[4].title }}</h3>
          <p class="text-base">{{ cards[4].description }}</p>
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

  & > h3 {
    margin-bottom: 8px;
  }

  & > p {
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
    & > h3 {
      color: var(--zinc-100);
    }
    & > p {
      color: var(--zinc-300);
    }
    & > img {
      border: 1px solid var(--zinc-700);
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
</style>
