<script setup lang="ts">
import { useLanguage } from '@/shared/composables'
import { cn } from '@/shared/libs/shadcn/utils'
import {
  buttonVariants,
  UiButton,
  UiSelect,
  UiSelectContent,
  UiSelectItem,
  UiSelectTrigger,
} from '@/shared/ui'
import { computed, reactive, ref } from 'vue'

const locales = reactive([
  { value: 'en-US', name: 'EN' },
  { value: 'ru-RU', name: 'RU' },
  { value: 'zh-CN', name: 'ZH' },
])

const language = ref('')
const i18nLanguage = computed(() => locales.find(item => item.value === language.value)?.name || language.value)

const { setLanguage } = useLanguage(locales, language)
</script>

<template>
  <UiSelect
    v-model:model-value="language"
    :class="cn(buttonVariants({ variant: 'outline' }), 'appearance-none bg-transparent font-normal')"
    @update:model-value="setLanguage($event)"
  >
    <UiSelectTrigger class="w-fit border-none shadow-none bg-none focus:ring-0 focus:outline-none ring-0 ring-offset-0" as-child>
      <UiButton
        variant="ghost"
        size="sm"
        class="p-1.5 px-2.5 h-fit gap-1 text-neutral-400 hover:text-neutral-700 dark:!text-neutral-400 dark:hover:!text-neutral-200"
      >
        <div i-hugeicons-globe-02 text-base />
        <span text-sm fw400>{{ i18nLanguage }}</span>
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent class="w-fit min-w-2" align="center">
      <UiSelectItem
        v-for="item in locales"
        :key="item.value"
        :value="item.value"
        class="text-sm justify-center w-full px-0"
      >
        {{ item.name }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
