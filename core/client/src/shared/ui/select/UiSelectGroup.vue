<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { SelectGroup, type SelectGroupProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<SelectGroupProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectGroup
    :class="cn(
      'select-group',
      props.class,
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </SelectGroup>
</template>
