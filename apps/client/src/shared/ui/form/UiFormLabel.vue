<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { Label, type LabelProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

interface Props extends LabelProps {
  class?: HTMLAttributes['class']
  required?: boolean
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <div class="form-label-container">
    <Label
      :class="cn(
        'form-label',
        props.class,
      )"
      v-bind="delegatedProps"
    >
      <slot />
    </Label>
    <div
      v-if="required"
      i-lucide-asterisk
      class="form-label-required"
    />
  </div>
</template>
