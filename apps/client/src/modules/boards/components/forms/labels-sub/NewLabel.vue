<script setup lang="ts">
import { shallowRef } from 'vue'
import { useField, useForm } from 'vee-validate'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { toTypedSchema } from '@vee-validate/zod'
import { useBoardsStore } from '../../../stores/boards'
import ColorAndNameLabel from './ColorAndNameLabel.vue'
import { UiButton, UiFormMessage } from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'

const emits = defineEmits<{
  (e: 'cancel'): void
}>()

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().refine((name) => {
      const existingLabels = board.value.labels.map(label => label.name) || []
      return !existingLabels.includes(name)
    }, { message: t('board.forms.labels.errors.exists') }),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})

const { value: name } = useField<string>('name')

const color = shallowRef<string>('#266df0')

const createLabel = handleSubmit(async (values) => {
  boardsStore.addLabel({
    id: Math.random().toString(36).slice(2),
    name: values.name,
    color: color.value,
    taskCount: 0,
  })
  name.value = ''
  color.value = '#266df0'
})
</script>

<template>
  <div v-auto-animate class="flex flex-col gap-1.5">
    <div class="flex items-center gap-2 w-full justify-between">
      <ColorAndNameLabel v-model:color="color" v-model:name="name" />
      <div class="flex items-center gap-2">
        <UiButton variant="outline" class="w-fit h-8.5 shadow-none" @click="emits('cancel')">
          {{ t('board.forms.labels.actions.cancel') }}
        </UiButton>
        <UiButton :disabled="!!errors.name || !name" variant="solid" class="w-fit h-8.5 shadow-none" @click="createLabel">
          {{ t('board.forms.labels.actions.add') }}
        </UiButton>
      </div>
    </div>
    <UiFormMessage v-if="errors.name" class="w-fit ml-0.5" :content="errors.name" />
  </div>
</template>
