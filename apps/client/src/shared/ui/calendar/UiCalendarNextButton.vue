<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { CalendarNext, type CalendarNextProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'
import { buttonVariants } from '@/shared/ui/button'

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'calendar-button',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <div i-lucide-chevron-right class="calendar-button-icon" />
    </slot>
  </CalendarNext>
</template>
