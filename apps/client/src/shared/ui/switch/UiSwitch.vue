<script setup lang="ts">
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { switchVariants, type SwitchVariants } from '.'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

type SwitchProps = SwitchRootProps & {
  class?: HTMLAttributes['class']
  variant?: SwitchVariants['variant']
  thumb?: SwitchVariants['thumb']
}

const {
  variant = 'default',
  thumb = 'default',
  class: switchClass,
  ...props
} = defineProps<SwitchProps>()

const emits = defineEmits<SwitchRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        switchVariants({ variant }),
        'switch peer',
        switchClass,
      )"
  >
    <SwitchThumb
      :class="cn(
        switchVariants({ thumb }),
        'switch-thumb',
      )"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
