<script setup lang="ts">
defineSlots<{
  default: () => any;
}>();
</script>

<template>
  <div :class="$style.group">
    <slot />
  </div>
</template>

<style module lang="scss">
.group {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
