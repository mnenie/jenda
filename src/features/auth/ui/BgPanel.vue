<script setup lang="ts">
import { computed } from 'vue';
import { useDark, useWindowSize } from '@vueuse/core';
import { reviews } from '../model';
import useTextChanging from '../model/composables/useTextChanging';

const { currentIndex } = useTextChanging(reviews);

const isDark = useDark();
const imgBlockquote = computed(() => {
  return isDark.value ? '/icons/blockquote-dark.png' : '/icons/blockquote-light.png';
});

const { width } = useWindowSize();
</script>

<template>
  <div v-if="width > 1100" :class="$style.container">
    <div :class="$style.blocks">
      <blockquote>
        <img :src="imgBlockquote" :class="$style.blockquote_img" />
        {{ reviews[currentIndex].text }}
      </blockquote>
      <div :class="$style.avatar_section">
        <img
          src="https://avatars.githubusercontent.com/u/121057011?v=4"
          :alt="reviews[currentIndex].author"
          :class="$style.avatar_img"
        />
        <div :class="$style.who">
          <cite :class="[$style.author_name, 'text-base']">{{ reviews[currentIndex].author }}</cite>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  overflow: hidden;
  background-color: var(--zinc-100);

  .blocks {
    position: relative;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 24px;

    blockquote {
      position: relative;
      z-index: 99;
      font-size: 28px;
      max-width: 42rem;

      .blockquote_img {
        position: absolute;
        top: -24px;
        left: -40px;
        width: 60px;
        z-index: -1;
      }
    }

    .avatar_section {
      display: flex;
      align-items: center;
      gap: 12px;

      .avatar_img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
      }
      .who {
        display: flex;

        .author_name {
          white-space: nowrap;
          font-weight: 500;
          font-style: normal;
        }
      }
    }
  }
}

:global(html.dark) {
  .container {
    background-color: var(--zinc-900);

    .blocks {
      blockquote {
        color: var(--zinc-200);
      }

      .avatar_section {
        .who {
          .author_name {
            color: var(--zinc-300);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .container {
    padding: 0 100px;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    .blocks {
      blockquote {
        font-size: 24px;
      }
    }
  }
}
</style>
