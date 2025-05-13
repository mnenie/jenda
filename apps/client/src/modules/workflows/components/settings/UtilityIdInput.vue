<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  UiFormField,
  UiFormLabel,
  UiTagsInput,
  UiTagsInputInput,
  UiTagsInputItem,
  UiTagsInputItemDelete,
  UiTagsInputItemText,
} from '@/shared/ui'

const { type = 'task' } = defineProps<{
  type?: 'task' | 'channel' | 'group'
}>()

const id = shallowRef<string[]>()

const { t } = useI18n()
const placeholder = computed(() => id.value?.length ? '' : t(`workflow.node.settings.inputs.${type}`))
</script>

<template>
  <UiFormField class="w-full">
    <UiFormLabel required class="text-neutral-500 dark:text-neutral-400">
      {{ t(`workflow.node.settings.sections.${type}`) }}
    </UiFormLabel>
    <UiTagsInput v-model="id" add-on-paste :max="1" class="px-1 py-1 w-full">
      <UiTagsInputItem v-for="item in id" :key="item" :value="item">
        <UiTagsInputItemText />
        <UiTagsInputItemDelete />
      </UiTagsInputItem>
      <UiTagsInputInput class="w-full px-1" :placeholder />
    </UiTagsInput>
  </UiFormField>
</template>
