<script setup lang="ts">
import { UiTabsList, UiTabsTrigger } from '@/shared/ui'
</script>

<template>
  <UiTabsList>
    <UiTabsTrigger value="table">
      <span i-hugeicons-layout-table-02 />
    </UiTabsTrigger>
    <UiTabsTrigger value="cards">
      <span i-hugeicons-dashboard-square-01 />
    </UiTabsTrigger>
  </UiTabsList>
</template>
