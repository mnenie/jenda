<script setup lang="ts">
import { useEmitAsProps } from 'radix-vue'
import {
  UiCommand,
  UiCommandInput,
  UiCommandItem,
  UiCommandList,
} from '../index'
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()
</script>

<template>
  <UiCommand
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    class="rounded-lg border shadow-md max-w-[450px]"
  >
    <UiCommandInput placeholder="Search..." />
    <UiCommandList>
      <UiCommandItem value="test">
        <span>test item</span>
      </UiCommandItem>
    </UiCommandList>
  </UiCommand>
</template>
