<script setup lang="ts">
import { UiInput } from '@/shared/ui'

const estimate = defineModel<number>('estimate')

function onInput(event: Event) {
  const input = event.target as HTMLInputElement
  estimate.value = Number(input.value.replace(/\D/g, '').slice(0, 2))
}
</script>

<template>
  <UiInput
    v-model="estimate"
    type="number"
    class="shadow-none border-transparent focus:ring-0 border-dashed hover:border-gray-300 pl-1"
    @input="onInput"
  />
</template>
