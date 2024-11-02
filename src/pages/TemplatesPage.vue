<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { AllTemplates } from '@/widgets/templates';
import { ImportTemplate } from '@/entities/template';

useHead({
  title: 'Jenda | Templates'
});
</script>

<template>
  <div :class="$style.top">
    <p class="text-sm">{{ $t('templates.description') }}</p>
  </div>
  <ImportTemplate />
  <AllTemplates />
</template>

<style module lang="scss">
.top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  & > p {
    color: var(--zinc-500);
  }
}

:global(html.dark) {
  .top {
    & > p {
      color: var(--zinc-300);
    }
  }
}
</style>
