<script setup lang="ts">
import { computed } from 'vue';

interface RadioItem {
  inputId?: string;
  modelValue?: string;
  value?: string;
  name?: string;
}

const props = withDefaults(defineProps<RadioItem>(), {
  inputId: 'radio-input-id',
  modelValue: '',
  value: undefined,
  name: 'radio-input-name'
});

const emits = defineEmits(['update:modelValue']);

const checked = computed(() => {
  return props.modelValue === props.value;
});
</script>

<template>
  <input
    :id="inputId"
    type="radio"
    :class="$style.radio_item"
    :value="value"
    :name="name"
    :checked="checked"
    @change="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.radio_item {
  appearance: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1px solid var(--zinc-800);
  @include transition;

  &:checked {
    &::after {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      background-color: var(--zinc-800);
      border-radius: 50%;
    }
  }
}

:global(html.dark) {
  .radio_item {
    border-color: var(--zinc-200);
    &:checked {
      &::after {
        background-color: var(--zinc-200);
      }
    }
  }
}
</style>
