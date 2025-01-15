<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { checkboxVariants, type CheckboxVariants } from './index'
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

interface Props extends CheckboxRootProps {
  class?: HTMLAttributes['class']
  variant?: CheckboxVariants['variant']
}

const { variant = 'default', ...props } = defineProps<Props>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="cn(checkboxVariants({ variant }), props.class)"
  >
    <CheckboxIndicator class="checkbox-indicator">
      <slot>
        <div
          class="checkbox-indicator-icon"
          :class="props.checked === 'indeterminate' ? 'i-lucide-minus' : 'i-lucide-check'"
        />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
