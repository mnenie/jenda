<script setup lang="ts">
import { computed } from 'vue'
import { useLocalStorage, useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { templatesInfo } from '../constants/templates'
import TemplateItem from './TemplateItem.vue'

const { tm } = useI18n()
const isExpanded = useLocalStorage('isExpanded', true)

const templates = computed(() => {
  const localeArr = tm('templates.items') as (typeof TemplateItem)[]
  return templatesInfo.map((template, index) => ({
    ...template,
    title: localeArr[index].title,
    tag: localeArr[index].tag,
    description: localeArr[index].description,
    date: localeArr[index].date,
  }))
})

const { width } = useWindowSize()

const gridVariant = computed(() =>
  width.value >= 1730
    ? isExpanded.value
      ? 'repeat(5, 1fr)'
      : 'repeat(6, 1fr)'
    : isExpanded.value
      ? 'repeat(4, 1fr)'
      : 'repeat(4, 1fr)',
)
</script>

<template>
  <div class="grid gap-15px w-full" :style="{ gridTemplateColumns: gridVariant }">
    <TemplateItem v-for="template in templates" :key="template.id" :template="template" />
  </div>
</template>
