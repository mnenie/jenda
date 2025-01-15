<script setup lang="ts">
import { DropdownMenuTrigger, type DropdownMenuTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<DropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    v-bind="forwardedProps"
    class="dropdown-menu-trigger"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
