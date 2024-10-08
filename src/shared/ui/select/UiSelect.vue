<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { Options } from './types';
import { Check, ChevronsUpDown } from 'lucide-vue-next';
import { UiButton } from '../button';

const props = withDefaults(
  defineProps<{
    modelValue?: null | string;
    options: Options[];
    as?: 'btn' | 'select';
  }>(),
  {
    modelValue: null,
    as: 'select'
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
  <div :class="[as === 'select' ? $style.custom_select : $style.btn_variant]">
    <div v-if="as === 'select'" ref="select" :class="$style.selected" @click="open = !open">
      <span class="text-sm">{{ selected }}</span>
      <ChevronsUpDown :size="15" color="var(--zinc-400)" />
    </div>
    <UiButton v-else ref="select" variant="ghost" size="sm" :class="$style.btn" @click="open = !open">
      <slot />
      {{ selected }}
    </UiButton>
    <Transition name="dropdown">
      <div v-if="open" :class="$style.items">
        <div
          v-for="(option, i) of options"
          :key="i"
          :class="[$style.item, { [$style.active]: option.name === selected }]"
          :style="{ justifyContent: as === 'btn' ? 'center' : 'flex-start' }"
          @click="
            selected = option.name;
            open = false;
            emit('update:modelValue', option.name);
          "
        >
          <div v-if="as === 'select'" :class="$style.icon">
            <Check v-if="option.name === selected" :size="14" />
          </div>
          <span class="text-sm">{{ option.name }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

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
}

.btn_variant {
  position: relative;
  z-index: 50;
}

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

.btn {
  width: 54px;
  padding: 8px;
  gap: 4px;
  color: var(--zinc-300);

  @include on-hover {
    color: var(--zinc-600);
  }
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

    .icon {
      width: 16px;
      height: 16px;
      color: var(--zinc-800);
    }
  }
}

.active {
  background-color: var(--zinc-100);
}

.selectHide {
  display: none;
}

:global(html.dark) {
  .custom_select {
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    color: var(--zinc-200);
    border-color: var(--zinc-600);
  }
  .items {
    background-color: #313131;
    border-color: var(--zinc-600);
    color: var(--zinc-200);

    .item {
      &:hover {
        background-color: rgba(var(--zinc-rgb-600), 0.4);
      }
      .icon {
        color: var(--zinc-300);
      }
    }
  }
  .active {
    background-color: rgba(var(--zinc-rgb-600), 0.6);
  }
  .btn {
    color: var(--zinc-300);
    @include on-hover {
      color: var(--zinc-200);
    }
  }
}
</style>
