<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'

const { direction = 'vertical' } = defineProps<{
  steps: number[]
  direction?: 'horizontal' | 'vertical'
}>()
</script>

<template>
  <div
    :class="cn(
      'flex gap-0 w-full',
      [direction === 'horizontal' ? 'flex-row' : 'flex-col'],
    )"
  >
    <div v-for="(step, index) in steps" :key="step">
      <Transition v-if="index === steps.length - 1 && index !== 0" appear name="fade">
        <slot :name="`step-${step}`" />
      </Transition>
      <template v-else>
        <slot :name="`step-${step}`" />
      </template>
      <div
        v-if="index < steps.length - 1 && steps.length > 1"
        :class="cn(
          'bg-neutral-100 dark:bg-neutral-700 rounded-md',
          [direction === 'horizontal' ? 'w-full h-px my-auto' : 'h-10 w-0.7 mx-3 my-0.5'],
        )"
      />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
