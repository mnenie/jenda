<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { DropdownItem } from './types';

const props = defineProps<{
  item: DropdownItem;
}>();

const emits = defineEmits<{
  (e: 'onDropdown'): void;
}>();

const router = useRouter();
const onDropdownItem = () => {
  router.push({ name: props.item.routeName });
  emits('onDropdown');
};
</script>

<template>
  <div :class="$style.item" @click="onDropdownItem">
    <span style="font-weight: 500; font-size: 12px;">
      {{ item.content }}
    </span>
    <span style="font-size: 11px;">{{ item.shortcut }}</span>
  </div>
</template>

<style module lang="scss">
.item {
  cursor: pointer;
  user-select: none;
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;

  &:hover {
    background-color: var(--zinc-100);
  }
}

:global(html.dark) {
  .item {
    &:hover {
      background-color: rgba(var(--zinc-rgb-600), 0.4);
    }
  }
}
</style>
