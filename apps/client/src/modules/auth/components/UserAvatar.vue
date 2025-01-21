<script setup lang="ts">
defineProps<{
  img?: string
}>()
</script>

<template>
  <div
    class="flex items-center justify-center h-30px w-30px select-none overflow-hidden text-sm
  bg-neutral-100 text-neutral-950 rounded-full dark:bg-neutral-700 dark:text-neutral-50"
  >
    <slot v-if="$slots.default" />
    <img v-else :src="img" class="object-cover w-full h-full" />
  </div>
</template>
