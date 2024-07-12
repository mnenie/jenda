<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { AllTemplates } from '@/widgets/templates';

useHead({
  title: 'Jenda | Templates'
});
</script>

<template>
  <div v-once :class="$style.top">
    <h4 class="heading-4">Templates</h4>
    <p class="text-sm" style="color: var(--zinc-500)">
      Choose one of the available templates to create your project
    </p>
  </div>
  <AllTemplates />
</template>

<style module lang="scss">
.top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
</style>
