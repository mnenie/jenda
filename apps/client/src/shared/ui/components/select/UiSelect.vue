<script setup lang="ts">
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'
import type { SelectRootEmits, SelectRootProps } from 'radix-vue'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot v-slot="{ open }" v-bind="forwarded">
    <slot :open />
  </SelectRoot>
</template>
