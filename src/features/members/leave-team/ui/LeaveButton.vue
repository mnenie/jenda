<script setup lang="ts">
import { UiButton } from '@/shared/ui';
import { X } from 'lucide-vue-next';
</script>

<template>
  <UiButton :variant="'destructive'">
    <X :size="17" style="margin-right: 6px" />
    Leave...
  </UiButton>
</template>
