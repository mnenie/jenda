<script setup lang="ts">
defineSlots<{
  default: () => any;
  user: () => any;
}>();
</script>

<template>
  <div class="text-sm" :class="$style.card">
    <slot />
    <div :class="$style.user_container">
      <slot name="user" />
    </div>
  </div>
</template>

<style module lang="scss">
.card {
  position: relative;
  background-color: white;
  border: 1px solid var(--zinc-200);
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 6px;
  width: 100%;
}

.user_container {
  position: absolute;
  bottom: 6px;
  right: 6px;
}
</style>
