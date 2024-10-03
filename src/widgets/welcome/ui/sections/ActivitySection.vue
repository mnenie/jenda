<script setup lang="ts">
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
import { Activity } from 'lucide-vue-next';

const isDark = useDark();
const iconColor = computed(() => (isDark.value ? 'var(--zinc-400)' : 'var(--zinc-600)'));
</script>

<template>
  <div id="activity" :class="$style.activity">
    <div :class="$style.name">
      <Activity :size="36" :color="iconColor" />
      <div>
        <h2 class="heading-2">{{ $t('welcome.activity.heading') }}</h2>
        <p>{{ $t('welcome.activity.about') }}</p>
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
    width: 100%;
    gap: 20px;

    & > div {
      width: 100%;
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
</style>
