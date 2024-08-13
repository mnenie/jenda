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

<style module lang="scss">
@import '@/app/styles/mixins';

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: 6px;
  font-weight: 500 !important;
  opacity: 1;

  @include on-focus {
    outline: none;
  }
  @include transition;
}

.default {
  background-color: var(--zinc-900);
  color: var(--zinc-50);
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);

  @include on-hover {
    background-color: rgba(var(--zinc-rgb-900), 0.9);
  }
  &:disabled {
    opacity: 0.5;
  }
}

.secondary {
  background-color: rgba(228, 228, 231, 0.6);
  color: var(--zinc-900);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @include on-hover {
    background-color: rgba(228, 228, 231, 0.5);
  }
  &:disabled {
    opacity: 0.5;
  }
}

.destructive {
  background-color: white;
  color: var(--destructive);
  border: 1px solid var(--destructive);

  @include on-hover {
    opacity: 0.9;
    background-color: rgb(254 242 242);
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

.dashed {
  border: 1px dashed var(--zinc-200);
  color: var(--zinc-900);
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @include on-hover {
    background-color: var(--zinc-50);
  }
}

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

:global(html.dark) {
  .default {
    background-color: var(--zinc-200);
    color: var(--zinc-950);

    @include on-hover {
      background-color: rgba(var(--zinc-rgb-50), 0.9);
    }
  }

  .secondary {
    background-color: rgba(var(--zinc-rgb-600), 0.55);
    color: var(--zinc-200);

    @include on-hover {
      background-color: rgba(var(--zinc-rgb-600), 0.5);
    }
  }
  .ghost {
    color: var(--zinc-100);

    @include on-hover {
      background-color: rgba(var(--zinc-rgb-600), 0.4);
    }
  }

  .outline {
    border: 1px solid var(--zinc-600);
    color: var(--zinc-200);
    background-color: rgba(var(--zinc-rgb-700), 0.8);

    @include on-hover {
      border-color: var(--zinc-500);
    }
  }

  .destructive {
    background-color: var(--dark-destructive);
    color: var(--zinc-100);
    border-color: var(--dark-destructive);

    @include on-hover {
      background-color: rgba(var(--dark-rgb-destructive), 0.95);
    }
  }

  .dashed {
    border: 1px dashed var(--zinc-600);
    color: var(--zinc-200);
    background-color: rgba(var(--zinc-rgb-600), 0.5);

    @include on-hover {
      background-color: rgba(var(--zinc-rgb-600), 0.4);
    }
  }
}
</style>
