<script setup lang="ts">
import type { ButtonType, ButtonSize } from './types';

withDefaults(
  defineProps<{
    type?: ButtonType;
    size?: ButtonSize;
  }>(),
  {
    type: 'default',
    size: 'default'
  }
);
</script>

<template>
  <button :class="[$style.button, $style[type], $style[size]]">
    <slot />
  </button>
</template>

<style lang="scss" module>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: small;
  border-radius: 10px;
  font-weight: 500;
}
</style>
