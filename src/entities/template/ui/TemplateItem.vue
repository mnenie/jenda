<script setup lang="ts">
import { UiBadge } from '@/shared/ui';
import type { Template } from '../model';

defineProps<{
  template: Template;
}>();
</script>

<template>
  <div :class="$style.item">
    <div :class="$style.main_content">
      <UiBadge variant="outline" style="margin-bottom: 12px">
        {{ template.tag }}
      </UiBadge>
      <div :class="$style.text">
        <p class="text-sm">{{ template.title }}</p>
        <span class="text-xs">{{ template.description }}</span>
      </div>
      <div :class="$style.bottom">
        <span class="text-xs">{{ template.date }}</span>
        <img v-tooltip.bottom-end="$t('templates.user')" :src="template.user" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.item {
  position: relative;
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

  .main_content {
    padding: 8px 12px;
    width: 100%;

    .text {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 12px;

      & > span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
      }
    }

    & span {
      color: var(--zinc-500);
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

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
    .img_wrapper {
      border-color: var(--zinc-600);
    }
    .main_content {
      & span {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
