<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { Label, type LabelProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    :class="cn(
      'form-label',
      props.class,
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </Label>
</template>
