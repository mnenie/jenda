<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/shadcn/utils'
import { createReusableTemplate } from '@vueuse/core'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
  disabled?: boolean
  loadingPlacement?: 'leading' | 'trailing'
}

const {
  variant = 'default',
  size = 'default',
  loadingPlacement = 'leading',
  class: btnClass,
  as = 'button',
} = defineProps<Props>()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), btnClass)"
    :disabled="loading || disabled"
  >
    <DefineTemplate v-if="loading">
      <slot name="loading">
        <div i-lucide-loader-circle class="h-4 w-4 animate-spin" />
      </slot>
    </DefineTemplate>

    <ReuseTemplate v-if="loading && loadingPlacement === 'leading'" />
    <slot v-else name="leading" />

    <slot />

    <ReuseTemplate v-if="loading && loadingPlacement === 'trailing'" />
    <slot v-else name="trailing" />
  </Primitive>
</template>
