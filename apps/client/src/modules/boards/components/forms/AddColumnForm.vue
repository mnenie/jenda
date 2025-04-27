<script setup lang="ts">
import { shallowRef } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { createReusableTemplate } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useBoardsStore } from '../../stores/boards'
import NameWithColor from './edit-sub/NameWithColor.vue'
import type { Column } from '../../types'
import { z } from '@/shared/libs/vee-validate'
import { UiButton, UiDialogFooter, UiFormField, UiFormLabel, UiFormMessage, UiTextarea } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
const popoverModel = shallowRef(false)

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    title: z.string()
      .min(2)
      .max(15)
      .refine(value => !board.value.columns!.some(column => column.title === value), {
        message: t('kanban.column.forms.add.title.error'),
      }),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})

const { value: title } = useField<string>('title', {}, { initialValue: '' })

const color = shallowRef<string>('#5f72bd')
const description = shallowRef<string>('')

const loading = shallowRef(false)

const addColumn = handleSubmit(async (values) => {
  loading.value = true
  await new Promise<void>(resolve => setTimeout(resolve, 500))
  try {
    const newColumn = {
      _id: Math.random().toString(),
      title: values.title,
      description: description.value,
      color: color.value,
      estimate: 0,
    } satisfies Column
    if (board.value) {
      board.value.columns!.push(newColumn)
    }
    emit('close')
    toast.success('Success!')
  }
  catch {
    toast.error('Error!')
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="space-y-2">
    <DefineTemplate v-slot="{ $slots, field, error }">
      <UiFormField v-auto-animate class="mb-3 w-full">
        <UiFormLabel
          :for="field"
        >
          {{ $t(`kanban.column.forms.edit.${field}.label`) }}
        </UiFormLabel>
        <component :is="$slots.default" />
        <UiFormMessage v-if="error" :content="error" class="transition-all" />
      </UiFormField>
    </DefineTemplate>
    <form @submit.prevent="addColumn">
      <div>
        <ReuseTemplate field="title" :error="errors.title">
          <NameWithColor
            v-model:name="title"
            v-model:color="color"
            v-model:popover="popoverModel"
            t-prefix="kanban.column"
            t-field="title"
          />
        </ReuseTemplate>
      </div>
      <div>
        <ReuseTemplate field="description" class="mt-3">
          <UiTextarea
            id="description"
            v-model="description"
            :placeholder="$t('kanban.column.forms.edit.description.placeholder')"
            class="max-h-100 input-filled shadow-sm"
          />
        </ReuseTemplate>
      </div>
      <UiDialogFooter class="sm:justify-end mt-7">
        <UiDialogClose as-child>
          <UiButton type="button" size="sm" variant="secondary">
            {{ $t('common.edit.btns', 1) }}
          </UiButton>
        </UiDialogClose>
        <UiButton type="submit" :disabled="!!errors.title || loading" size="sm" variant="solid">
          {{ $t('common.edit.btns', 2) }}
        </UiButton>
      </UiDialogFooter>
    </form>
  </div>
</template>
