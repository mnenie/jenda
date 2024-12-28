<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import {
  DropdownMenuCheckboxItem,
  type DropdownMenuCheckboxItemEmits,
  type DropdownMenuCheckboxItemProps,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<DropdownMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class=" cn(
      'dropdown-menu-checkbox-item',
      props.class,
    )"
  >
    <span class="dropdown-menu-checkbox-item-indicator">
      <DropdownMenuItemIndicator>
        <div i-lucide-check class="w-4 h-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
