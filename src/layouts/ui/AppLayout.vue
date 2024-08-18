<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { defineAsyncComponent } from 'vue';

const { width } = useWindowSize();

const NotAvailable = defineAsyncComponent(() => {
  return import('@/widgets/device/ui/NotAvailable.vue');
});
</script>

<template>
  <div v-if="width >= 1100">
    <component :is="$route.meta.layoutComponent">
      <slot />
    </component>
  </div>
  <NotAvailable v-else />
</template>
