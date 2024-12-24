<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'
import { Label, type LabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

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
