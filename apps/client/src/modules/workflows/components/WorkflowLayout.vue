<script setup lang="ts">
import { ref } from 'vue'
import { providePickerContext } from '../composables/picker'

const isPickerOpen = ref(false)

function togglePicker() {
  isPickerOpen.value = !isPickerOpen.value
}

providePickerContext({
  togglePicker,
  isPickerOpen,
})
</script>

<template>
  <slot :picker-init="togglePicker" :picker-open="isPickerOpen" />
</template>
