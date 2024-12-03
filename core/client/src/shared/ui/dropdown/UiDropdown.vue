<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { computed, ref, useTemplateRef } from 'vue'

const { direction = 'center' } = defineProps<{
  direction?: 'left' | 'center' | 'right'
}>()

defineSlots<{
  header: () => any
  trigger: () => any
  content: () => any
}>()

const isOpen = ref(false)
const dropdown = useTemplateRef<HTMLElement | null>('dropdown')

function handleDropdown() {
  isOpen.value = !isOpen.value
}
function onDropdownContent() {
  isOpen.value = false
}

onClickOutside(dropdown, () => {
  isOpen.value = false
})

const dropdownStyles = computed(() => {
  if (direction === 'left') {
    return { top: '36px', left: '0px', transform: 'translateX(0%)' }
  }
  else if (direction === 'center') {
    return { top: '36px', left: '50%', transform: 'translateX(-50%)' }
  }
  else {
    return { top: '36px', right: '0px', transform: 'translateX(0%)' }
  }
})
</script>

<template>
  <div ref="dropdown" :class="$style.dropdown">
    <div :class="$style.wrapper" @click="handleDropdown">
      <slot name="trigger" />
    </div>
    <Transition name="dropdown">
      <div v-if="isOpen" :class="$style.inside" :style="dropdownStyles">
        <div v-if="$slots.header" class="text-sm" :class="[$style.header]">
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
    max-height: 24rem;
    height: fit-content;
    min-width: 8rem;
    width: fit-content;
    border-radius: 6px;
    border: 1px solid var(--zinc-200);
    background-color: white;
    color: var(--zinc-900);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    text-wrap: nowrap;

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
