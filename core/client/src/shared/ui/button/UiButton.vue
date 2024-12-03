<script setup lang="ts">
import type { ButtonSize, ButtonType } from './types'
import { Spin } from '@/shared/assets/icons'
import { createReusableTemplate } from '@vueuse/core'

interface ButtonProps {
  variant?: ButtonType
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  loadingPlacement?: 'leading' | 'trailing'
}

const { variant = 'default', size = 'md', loadingPlacement = 'leading' } = defineProps<ButtonProps>()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <button
    class="text-sm"
    :class="[$style.button, $style[variant], $style[size]]"
    :disabled="loading || disabled"
  >
    <DefineTemplate v-if="loading">
      <slot name="loading">
        <Spin :class="$style.loader" />
      </slot>
    </DefineTemplate>

    <ReuseTemplate v-if="loading && loadingPlacement === 'leading'" />

    <slot v-else name="leading" />

    <slot />

    <ReuseTemplate v-if="loading && loadingPlacement === 'trailing'" />

    <slot v-else name="trailing" />
  </button>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: 6px;
  font-weight: 500 !important;
  opacity: 1;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

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
  background-color: rgba(231, 231, 231, 0.6);
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
  height: 34px;
  padding: 8px 16px;
  gap: 8px;
}

.lg {
  height: 36px;
  padding: 8px 18px;
  gap: 10px;
}

.sm {
  height: 28px;
  padding: 8px 12px;
  gap: 6px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader{
  animation: spin 1s linear infinite;
  font-size: 16px;
}

:global(html.dark) {
  .default {
    background-color: var(--zinc-100);
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
