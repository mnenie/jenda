<script setup lang="ts">
import type { PinInputRootEmits, PinInputRootProps } from 'radix-vue'
import { useEmitAsProps } from 'radix-vue'
import { ref } from 'vue'
import { UiPinInput, UiPinInputInput } from '../index'

const props = defineProps<PinInputRootProps>()
const emits = defineEmits<PinInputRootEmits>()

const value = ref<string[]>([])
</script>

<template>
  <UiPinInput
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    v-model="value"
    class="flex gap-2 items-center"
  >
    <UiPinInputInput
      v-for="(id, index) in 5"
      :key="id"
      class="w-10 h-10 rounded text-yellow-800"
      :index="index"
    />
  </UiPinInput>
</template>
