<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { defineAsyncComponent } from 'vue'

const { width } = useWindowSize()

// TODO: jenda with mobile devices
const NotAvailable = defineAsyncComponent(() => {
  return import('@/widgets/device/ui/NotAvailable.vue')
})
</script>

<template>
  <div>
    <component :is="$route.meta.layoutComponent">
      <slot />
    </component>
  </div>
  <!-- <NotAvailable v-else /> -->
</template>
