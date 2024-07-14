<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { Options } from './types';
import { Check, ChevronsUpDown } from 'lucide-vue-next';

const props = withDefaults(
  defineProps<{
    modelValue?: null | string;
    options: Options;
  }>(),
  {
    modelValue: null
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', option: string): void;
}>();

const select = ref(null);
const open = ref(false);

onClickOutside(select, () => {
  open.value = false;
});

const selected = ref(props.modelValue);
</script>

<template>
  <div :class="$style.custom_select">
    <div ref="select" :class="$style.selected" @click="open = !open">
      <span class="text-sm">{{ selected }}</span>
      <ChevronsUpDown :size="15" color="var(--zinc-400)" />
    </div>
    <Transition>
      <div v-show="open" :class="$style.items">
        <div
          v-for="(option, i) of options"
          :key="i"
          :class="[$style.item, { [$style.active]: option === selected }]"
          @click="
            selected = option;
            open = false;
            emit('update:modelValue', option);
          "
        >
          <div style="width: 16px; height: 16px">
            <Check v-if="option === selected" :size="14" color="var(--zinc-800)" />
          </div>
          <span class="text-sm">{{ option }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style module lang="scss">
.custom_select {
  position: relative;
  z-index: 50;
  max-height: 24rem;
  height: fit-content;
  min-width: 8rem;
  width: 200px;
  border-radius: 6px;
  border: 1px solid var(--zinc-200);
  background-color: white;
  color: var(--zinc-900);
  padding: 0.5rem 0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  .selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    cursor: pointer;
    user-select: none;
  }

  .items {
    position: absolute;
    overflow: hidden;
    color: var(--zinc-900);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 6px;
    background-color: white;
    border: 1px solid var(--zinc-200);
    bottom: -122px;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    .item {
      cursor: pointer;
      user-select: none;
      padding: 6px 10px;
      display: flex;
      align-items: center;
      gap: 6px;

      &:hover {
        background-color: var(--zinc-100);
      }
    }
  }
}

.active {
  background-color: var(--zinc-100);
}

.selectHide {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
