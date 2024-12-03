<script setup lang="ts">
import type { Options } from '@/shared/ui/select/types'
import { useLanguage } from '@/shared/lib/composables'
import { UiSelect } from '@/shared/ui'
import { ref, shallowReactive } from 'vue'

const options = shallowReactive<Options[]>([
  { name: 'English', value: 'en-US' },
  { name: 'Русский', value: 'ru-RU' },
  { name: '简体中文', value: 'zh-CN' },
])
const language = ref('')

useLanguage(options, language)
</script>

<template>
  <UiSelect v-model="language" :options />
</template>
