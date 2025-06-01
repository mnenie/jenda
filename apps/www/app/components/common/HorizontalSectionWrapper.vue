<script setup lang="ts">
interface BadgeProps {
  label: string
  icon: string
}
defineProps<{
  badge: BadgeProps
  title: string
  description: string
}>()
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2 my-28">
    <UnaBadge badge="soft" size="sm" :label="badge.label" :icon="badge.icon" />
    <h2 class="text-5xl leading-tight fw480 mb-1 text-left tracking-tighter">
      {{ title }}
    </h2>
    <p class="text-lg text-neutral-500">
      {{ description }}
    </p>
    <div class="w-full mt-8">
      <slot />
    </div>
  </div>
</template>
