<script setup lang="ts">
import { ref } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { type DialogRootEmits, type DialogRootProps, useEmitAsProps } from 'radix-vue'
import {
  UiDialog,
  UiDialogContent,
  UiDialogTitle,
  UiDialogTrigger,
} from '..'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

const reactiveOmitProps = reactiveOmit(props, 'open')

const isOpen = ref(false)
</script>

<template>
  <UiDialog
    v-bind="{ ...reactiveOmitProps, ...useEmitAsProps(emits) }"
    v-model:open="isOpen"
  >
    <UiDialogTrigger>
      open
    </UiDialogTrigger>
    <UiDialogContent>
      <UiDialogTitle>
        title
      </UiDialogTitle>
    </UiDialogContent>
  </UiDialog>
</template>
