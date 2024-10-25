<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { TemplateItem, templatesInfo } from '@/entities/template';
import { useLocalStorage } from '@vueuse/core';

const { tm } = useI18n();
const isExpanded = useLocalStorage('isExpanded', true);

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

const gridVariant = computed(() => (isExpanded.value ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)'));
</script>

<template>
  <div :class="$style.container">
    <TemplateItem v-for="template in templates" :key="template.id" :template="template" />
  </div>
</template>

<style module lang="scss">
.container {
  display: grid;
  grid-template-columns: v-bind('gridVariant');
  gap: 20px;
  width: 100%;
}
</style>
