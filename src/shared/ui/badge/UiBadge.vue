<script setup lang="ts">
import type { BadgeType } from './types';

withDefaults(
  defineProps<{
    variant?: BadgeType;
  }>(),
  {
    variant: 'default'
  }
);
</script>

<template>
  <div class="text-xs" :class="[$style.badge, $style[variant]]">
    <slot />
  </div>
</template>

<style module lang="scss">
.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: 6px;
  font-weight: 500 !important;
  padding: 1px 10px;
}

.default {
  background-color: var(--zinc-900);
  color: var(--zinc-50);
}

.secondary {
  background-color: rgba(228, 228, 231, 0.8);
  color: var(--zinc-950);
}

.outline {
  border: 1px solid var(--zinc-200);
  color: var(--zinc-900);
  background-color: white;
}

:global(html.dark) {
  .default {
    background-color: var(--zinc-100);
    color: var(--zinc-900);
  }

  .secondary {
    background-color: rgba(var(--zinc-rgb-600), 0.5);
    color: var(--zinc-200);
  }
}
</style>
