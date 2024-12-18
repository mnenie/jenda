<script lang="ts" setup>
import { cn } from '@/shared/libs/shadcn/utils'

interface ShimmerButtonProps {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  class?: string
}

withDefaults(defineProps<ShimmerButtonProps>(), {
  shimmerColor: '#2563eb',
  shimmerSize: '0.05em',
  shimmerDuration: '3s',
  borderRadius: '8px',
})
</script>

<template>
  <button
    :class="
      cn(
        'btn btn-secondary z-0 relative overflow-hidden h-8 rounded-md px-3 dark:hover:bg-#2e2e2e',
        $props.class,
      )
    "
    :style="{
      '--spread': '90deg',
      '--shimmer-color': shimmerColor,
      '--radius': borderRadius,
      '--speed': shimmerDuration,
      '--cut': shimmerSize,
    }"
  >
    <div :class="cn('-z-30 blur-[2px]', 'absolute inset-0 overflow-visible [container-type:size]')">
      <div
        class="animate-shimmer-btn-shimmer-slide absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]"
      >
        <div
          class="animate-shimmer-btn-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
        />
      </div>
    </div>
    <slot />

    <div
      :class="
        cn(
          'insert-0 absolute size-full',

          'rounded-2xl px-4 py-1.5 text-sm font-medium',

          // transition
          'transform-gpu transition-all duration-300 ease-in-out',

          // on hover
          'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',

          // on click
          'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]',
        )
      "
    />

    <div
      class="absolute -z-20 bg-neutral-100 dark:bg-#2e2e2e [border-radius:var(--radius)] [inset:var(--cut)]"
    />
  </button>
</template>

<style scoped>
@keyframes shimmer-btn-shimmer-slide {
  to {
    transform: translate(calc(100cqw - 100%), 0);
  }
}

@keyframes shimmer-btn-spin-around {
  0% {
    transform: translateZ(0) rotate(0);
  }
  15%,
  35% {
    transform: translateZ(0) rotate(90deg);
  }
  65%,
  85% {
    transform: translateZ(0) rotate(270deg);
  }
  100% {
    transform: translateZ(0) rotate(360deg);
  }
}

.animate-shimmer-btn-shimmer-slide {
  animation: shimmer-btn-shimmer-slide var(--speed) ease-in-out infinite alternate;
}

.animate-shimmer-btn-spin-around {
  animation: shimmer-btn-spin-around calc(var(--speed) * 2) infinite linear;
}
</style>
