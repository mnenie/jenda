<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { TemplateItem, templatesInfo } from '@/entities/template';

const { tm } = useI18n();

const templates = computed(() => {
  const localeArr = tm('templates.items') as (typeof TemplateItem)[];
  return templatesInfo.map((template, index) => ({
    ...template,
    title: localeArr[index].title,
    tag: localeArr[index].tag,
    description: localeArr[index].description,
    date: localeArr[index].date
  }));
});
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
