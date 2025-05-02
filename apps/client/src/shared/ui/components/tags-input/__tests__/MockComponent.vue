<script setup lang="ts">
import { ref } from 'vue'
import { type TagsInputRootEmits, type TagsInputRootProps, useEmitAsProps } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import { UiTagsInput, UiTagsInputInput, UiTagsInputItem, UiTagsInputItemDelete, UiTagsInputItemText } from '..'

const props = defineProps<TagsInputRootProps>()
const emits = defineEmits<TagsInputRootEmits>()

const reactiveOmitProps = reactiveOmit(props, 'modelValue')

const modelValue = ref<string[]>([])
</script>

<template>
  <UiTagsInput
    v-model="modelValue"
    v-bind="{ ...reactiveOmitProps, ...useEmitAsProps(emits) }"
  >
    <UiTagsInputItem v-for="item in modelValue" :key="item" :value="item">
      <UiTagsInputItemText />
      <UiTagsInputItemDelete />
    </UiTagsInputItem>

    <UiTagsInputInput placeholder="Test..." />
  </UiTagsInput>
</template>
