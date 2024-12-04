<script setup lang="ts">
import { useDark, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark()

const { width } = useWindowSize()

const iconColor = computed(() => (isDark.value ? 'var(--zinc-400)' : 'var(--zinc-600)'))
const iconSize = computed(() => (width.value >= 1100 ? 36 : 30))
</script>

<template>
  <div id="activity" :class="$style.activity">
    <div :class="$style.name">
      <span
        v-show="width > 768"
        i-hugeicons-chart-evaluation
        :style="{ color: iconColor, fontSize: `${iconSize}px` }"
      />
      <div>
        <h2 class="heading-2">
          {{ $t('welcome.activity.heading') }}
        </h2>
        <p class="text-base">
          {{ $t('welcome.activity.about') }}
        </p>
      </div>
    </div>
    <section>
      <img
        :src="isDark ? '/dev/dev-card-section-dark.png' : '/dev/dev-card-section.png'"
        loading="lazy"
        decoding="async"
      />
      <img
        :src="isDark ? '/dev/dev-card-section-dark.png' : '/dev/dev-card-section.png'"
        loading="lazy"
        decoding="async"
      />
    </section>
  </div>
</template>

<style module lang="scss">
.activity {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 100px;

  .name {
    display: flex;
    align-items: start;
    width: 100%;
    gap: 20px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    & .icon {
      color: var(--zinc-700);
    }

    & h2 {
      font-size: 40px;
      margin-bottom: 30px;
    }

    & p {
      max-width: 90%;
    }
  }

  & > section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1220px) {
  .activity {
    .name {
      & h2 {
        font-size: 38px;
      }
    }
  }
}

@media screen and (max-width: 1152px) {
  .activity {
    .name {
      & h2 {
        font-size: 34px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .activity {
    align-items: center;
    .name {
      & h2 {
        font-size: 32px;
      }
    }
    & > section {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      max-width: 640px;
    }
  }
}

@media screen and (max-width: 768px) {
  .activity {
    .name {
      & h2 {
        margin-bottom: 25px;
        text-align: center;
      }
      & p {
        text-align: center;
        max-width: 100%;
      }
    }
    & > section {
      max-width: 500px;
    }
  }
}

@media screen and (max-width: 520px) {
  .activity {
    .name {
      & h2 {
        font-size: 28px;
      }
    }
    & > section {
      max-width: unset;
      padding: 0;
    }
  }
}
</style>
