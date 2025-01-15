<script setup lang="ts">
import { useDark } from '@vueuse/core'
import type { Label } from '../../types'
import { formatLabelColor } from '@/shared/helpers/helperColor'
import {
  UiColorPicker,
  UiTagsInput,
  UiTagsInputInput,
  UiTagsInputItem,
  UiTagsInputItemDelete,
  UiTagsInputItemText,
} from '@/shared/ui'

const model = defineModel<Label[]>({ required: true })

const isDark = useDark()

function convertValue(value: string): Label {
  const colorMatch = value.match(/\[\s*(#([0-9a-f]{6}))\s*\]$/i)
  const name = colorMatch ? value.replace(colorMatch[0], '').trim() : value
  const color = colorMatch ? colorMatch[1] : ''
  return { name, color }
}
</script>

<template>
  <UiTagsInput
    v-model="model"
    :convert-value="convertValue"
    :display-value="(tag: any) => tag.name"
    class="w-full"
  >
    <UiTagsInputItem
      v-for="label in model"
      :key="label.name"
      :value="label"
      :style="{ background: label.color
                  ? label.color.startsWith('#')
                    ? `${label.color}33`
                    : label.color
                  : '',
                color: formatLabelColor(label.color, isDark ? 10 : 100) || '' }"
    >
      <UiTagsInputItemText />
      <UiColorPicker v-model:color="label.color" />
      <UiTagsInputItemDelete />
    </UiTagsInputItem>
    <UiTagsInputInput :placeholder="$t('boards.forms.creating.labels.placeholder')" />
  </UiTagsInput>
</template>
