<script setup lang="ts">
import { TemplateItem, templates } from '@/entities/template';
</script>

<template>
  <div :class="$style.container">
    <TemplateItem v-for="template in templates" :key="template.id" :template="template" />
  </div>
</template>

<style module lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
}
</style>
