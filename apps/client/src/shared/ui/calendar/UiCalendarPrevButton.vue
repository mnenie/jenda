<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'
import { buttonVariants } from '@/shared/ui/button'

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'calendar-button',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <div i-lucide-chevron-left class="calendar-button-icon" />
    </slot>
  </CalendarPrev>
</template>
