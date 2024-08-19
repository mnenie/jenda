<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { AllTemplates } from '@/widgets/templates';

useHead({
  title: 'Jenda | Templates'
});

const { t } = useI18n();
</script>

<template>
  <div :class="$style.top">
    <h4 class="heading-4">{{ t('templates.title') }}</h4>
    <p class="text-sm">{{ t('templates.description') }}</p>
  </div>
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
