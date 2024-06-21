<script setup lang="ts">
import type { ButtonType, ButtonSize } from './types';

withDefaults(
  defineProps<{
    variant?: ButtonType;
    size?: ButtonSize;
  }>(),
  {
    variant: 'default',
    size: 'md'
  }
);
</script>

<template>
  <button class="text-sm" :class="[$style.button, $style[variant], $style[size]]">
    <slot />
  </button>
</template>

<style lang="scss" module>
@import '@/app/styles/mixins';

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: 6px;
  font-weight: 500;
  opacity: 1;

  @include on-focus {
    outline: none;
  }
  @include transition;
}

// variant

.default {
  background-color: var(--zinc-900);
  color: var(--zinc-50);

  @include on-hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
  }
}

.secondary {
  background-color: rgba(228, 228, 231, 0.8);
  color: var(--zinc-900);

  @include on-hover {
    background-color: rgba(228, 228, 231, 0.7);
  }
  &:disabled {
    opacity: 0.5;
  }
}

.destructive {
  background-color: var(--destructive);
  color: var(--zinc-50);

  @include on-hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
  }
}

.ghost {
  background-color: transparent;
  color: var(--zinc-900);

  @include on-hover {
    background-color: var(--zinc-100);
  }
  &:disabled {
    opacity: 0.5;
  }
}

.outline {
  border: 1px solid var(--zinc-200);
  color: var(--zinc-900);
  background-color: white;

  @include on-hover {
    background-color: var(--zinc-100);
  }
  &:disabled {
    opacity: 0.5;
  }
}

// size

.md {
  height: 32px;
  padding: 8px 16px;
}

.lg {
  height: 36px;
  padding: 8px 18px;
}

.sm {
  height: 28px;
  padding: 8px 12px;
}
</style>
