<script setup lang="ts">
import { UiBadge } from '@/shared/ui';
import type { Template } from '../model';

defineProps<{
  template: Template;
}>();
</script>

<template>
  <div :class="$style.item">
    <div :class="$style.img_wrapper">
      <img :src="template.img" :alt="template.title" />
    </div>
    <div :class="$style.main_content">
      <UiBadge :variant="'secondary'" style="margin-bottom: 12px">{{ template.tag }}</UiBadge>
      <div :class="$style.text">
        <p class="text-base" style="font-weight: 500">{{ template.title }}</p>
        <span>{{ template.description }}</span>
      </div>
      <div :class="$style.bottom">
        <span class="text-xs">{{ template.date }}</span>
        <img v-tooltip.bottom-end="'creator'" :src="template.user" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid var(--zinc-200);
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  cursor: pointer;
  align-items: flex-start;
  @include transition;

  &:hover {
    border: 1px solid var(--purple-main);
  }

  .img_wrapper {
    width: 100%;
    height: 130px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid var(--zinc-200);

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .main_content {
    padding: 15px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 15px;
    }

    & span {
      color: var(--zinc-500);
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
}

:global(html.dark) {
  .item {
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    border-color: var(--zinc-600);
    &:hover {
      border-color: var(--zinc-400);
    }
    .img_wrapper{
      border-color: var(--zinc-600);
    }
    .main_content{
      & span {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
