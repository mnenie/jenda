<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

type InputProps = {
  modelValue?: string | number;
  placeholder?: string;
  type?: InputTypeHTMLAttribute;
};

withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: 'dizzo',
  type: 'text'
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :class="[$style.input_default, 'text-sm']"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.input_default {
  display: flex;
  width: 100%;
  height: 32px;
  border: 1px solid var(--zinc-200);
  border-radius: 6px;
  background-color: transparent;
  padding: 4px 12px;
  &::placeholder {
    color: var(--zinc-500);
  }
  @include transition;
  @include on-focus {
    outline: none;
    border: 1px solid var(--zinc-800);
  }
}
</style>
