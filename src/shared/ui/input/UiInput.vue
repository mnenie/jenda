<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

interface InputProps {
  modelValue?: string | number | null;
  placeholder?: string;
  type?: InputTypeHTMLAttribute;
  disabled?: boolean;
}

const { type = 'text', modelValue, placeholder, disabled } = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    :class="[$style.input_default, 'text-sm']"
    autocomplete="on"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.input_default {
  display: flex;
  width: 100%;
  height: 36px;
  border: 1px solid var(--zinc-200);
  border-radius: 6px;
  background-color: transparent;
  padding: 4px 12px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @include on-focus {
    outline: none;
    border: 1px solid var(--zinc-800);
  }

  @include transition;

  &::placeholder {
    color: var(--zinc-500);
    user-select: none;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type='password'] {
    font-size: 17px !important;
    letter-spacing: 0.05em;

    &::placeholder {
      font-size: 14px !important;
      letter-spacing: 0;
    }
  }
}

:global(html.dark) {
  .input_default {
    border-color: var(--zinc-600);
    background-color: rgba(var(--zinc-rgb-700), 0.8);

    &::placeholder {
      color: var(--zinc-300);
    }
  }
}

@media screen and (max-width: 1440px) {
  input[type='password'] {
    &::placeholder {
      font-size: 13px !important;
    }
  }
}

@media screen and (max-width: 1024px) {
  input[type='password'] {
    &::placeholder {
      font-size: 12px !important;
    }
  }
}
</style>
