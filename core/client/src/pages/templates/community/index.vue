<script setup lang="ts">
import { LayoutsEnum } from '@/layouts/model'

definePage({
  meta: {
    requiresAuth: true,
    layout: LayoutsEnum.empty,
  },
})
</script>

<template>
  <div>
    <p>
      test
    </p>
  </div>
</template>
