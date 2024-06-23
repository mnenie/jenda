<script setup lang="ts">
import { reviews } from '../config/reviews';
import useTextChanging from '../lib/composables/useTextChanging';

const { currentIndex } = useTextChanging(reviews);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.blocks">
      <div :class="$style.absolute_text">
        <span>“</span>
      </div>
      <blockquote>
        {{ reviews[currentIndex].text }}
      </blockquote>
      <div :class="$style.avatar_section">
        <img
          src="https://www.shadcn-vue.com/avatars/02.png"
          :alt="reviews[currentIndex].author"
          :class="$style.avatar_img"
        />
        <div :class="$style.who">
          <cite :class="$style.author_name">{{ reviews[currentIndex].author }}</cite>
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
    display: flex;
    flex-direction: column;
    gap: 24px;

    blockquote {
      z-index: 10;
      font-size: 28px;
      max-width: 42rem;
    }

    .absolute_text {
      position: absolute;
      left: -44px;
      top: -48px;
      user-select: none;

      span {
        font-family: serif;
        font-size: 160px;
        color: var(--zinc-300);
        line-height: 1;
      }
    }

    .avatar_section {
      display: flex;
      align-items: center;
      gap: 12px;

      .avatar_img {
        width: 48px;
        height: 48px;
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
</style>
