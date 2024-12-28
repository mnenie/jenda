<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PinInputRoot, type PinInputRootEmits, type PinInputRootProps, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<PinInputRootProps & { class?: HTMLAttributes['class'] }>(), {
  modelValue: () => [],
})
const emits = defineEmits<PinInputRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PinInputRoot
    v-bind="forwarded"
    :class="cn(
      'pin-input',
      props.class,
    )"
  >
    <slot />
  </PinInputRoot>
</template>
