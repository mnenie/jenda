<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const dropdown = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const handleDropdown = () => {
  isOpen.value = !isOpen.value;
};
const onDropdownContent = () => {
  isOpen.value = false;
};

onClickOutside(dropdown, () => {
  isOpen.value = false;
});

defineSlots<{
  header: () => any;
  trigger: () => any;
  content: () => any;
}>();
</script>

<template>
  <div ref="dropdown" :class="$style.dropdown">
    <div :class="$style.wrapper" @click="handleDropdown">
      <slot name="trigger" />
    </div>
    <Transition name="dropdown">
      <div v-if="isOpen" :class="$style.inside">
        <div v-if="$slots.header" :class="$style.header">
          <slot name="header" />
        </div>
        <div :class="$style.content" @click="onDropdownContent">
          <slot name="content" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style module lang="scss">
.dropdown {
  position: relative;
  z-index: 9999;

  .wrapper {
    max-height: 29px;
  }

  .inside {
    position: absolute;
    top: 36px;
    right: -4px;
    transform: translateX(0%);
    max-height: 24rem;
    height: fit-content;
    min-width: 8rem;
    width: fit-content;
    border-radius: 6px;
    border: 1px solid var(--zinc-200);
    background-color: white;
    color: var(--zinc-900);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    .header {
      width: 100%;
      padding: 0.5rem 10px;
      border-bottom: 1px solid var(--zinc-200);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .content {
      width: 100%;
      padding: 4px;
    }
  }
}

:global(html.dark) {
  .dropdown {
    .inside {
      background-color: rgba(52, 52, 52, 1);
      color: var(--zinc-200);
      border-color: var(--zinc-600);
      .header {
        border-color: var(--zinc-600);
      }
    }
  }
}
</style>
