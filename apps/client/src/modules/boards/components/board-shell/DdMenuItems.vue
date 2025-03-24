<script setup lang="ts">
import { markRaw } from 'vue'
import { menuItems } from '../../constants/board-menu'
import MenuItem from './MenuItem.vue'

const emits = defineEmits<{
  (e: 'edit'): void
  (e: 'labels'): void
  (e: 'background'): void
  (e: 'delete'): void
}>()

const ddItems = markRaw(menuItems.map(item => ({
  ...item,
  select: () => emits(item.tPrefix as any),
})))
</script>

<template>
  <MenuItem
    v-for="{ tPrefix, shortcut, select } in ddItems"
    :key="tPrefix"
    :shortcut="shortcut"
    :t-prefix="tPrefix"
    :class="{ 'dropdown-menu-destructive-item': tPrefix === 'delete' }"
    :prevent="false"
    @click="select"
  />
</template>
