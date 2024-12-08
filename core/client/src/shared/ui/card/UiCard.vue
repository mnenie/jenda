<script setup lang="ts">
defineSlots<{
  default: () => any
  user: () => any
}>()
</script>

<template>
  <div class="relative flex flex-col p-1.5 rounded-8px shadow-sm border border-solid border-neutral-200 text-sm dark:border-neutral-700">
    <slot />
    <div class="absolute bottom-1.5 top-1.5 w-fit">
      <slot name="user" />
    </div>
  </div>
</template>
