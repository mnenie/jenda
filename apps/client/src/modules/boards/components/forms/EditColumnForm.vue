<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { z } from 'zod'
import { toast } from 'vue-sonner'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import { useKanbanContext } from '../../composables/kanban'
import NameWithColor from './edit-sub/NameWithColor.vue'
import { UiButton, UiDialogClose, UiDialogFooter, UiFormField, UiFormLabel, UiFormMessage, UiTextarea } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const validationSchema = toTypedSchema(
  z.object({
    title: z.string().min(2),
  }),
)
const loading = shallowRef(false)
const popoverModel = shallowRef(false)

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const { id } = useKanbanContext()
const column = computed(() => board.value.columns?.find(column => column._id === id))

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: title } = useField<string>('title', {}, { initialValue: column.value?.title })
const color = shallowRef<string>(column.value?.color || '#ffffff')
const description = shallowRef<string>(column.value?.description || '')

const editColumn = handleSubmit(async (values) => {
  loading.value = true
  await new Promise<void>(resolve => setTimeout(resolve, 500))
  try {
    column.value!.title = values.title
    column.value!.color = color.value
    column.value!.description = description.value

    emit('close')
    toast.success('success')
  }
  catch {
    toast.error('error')
  }
  finally {
    loading.value = false
  }
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField class="mb-3 w-full">
      <UiFormLabel
        :for="field"
      >
        {{ $t(`kanban.column.forms.edit.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" class="transition-all" />
    </UiFormField>
  </DefineTemplate>
  <form @submit.prevent="editColumn">
    <ReuseTemplate field="title" :error="errors.title">
      <NameWithColor v-model:name="title" v-model:color="color" v-model:popover="popoverModel" t-prefix="kanban.column" t-field="title" />
    </ReuseTemplate>
    <ReuseTemplate field="description">
      <UiTextarea id="description" v-model="description" :placeholder="$t('kanban.column.forms.edit.description.placeholder')" class="max-h-100" />
    </ReuseTemplate>
    <UiDialogFooter class="sm:justify-end mt-7">
      <UiDialogClose as-child>
        <UiButton type="button" size="sm" variant="secondary">
          {{ $t('common.edit.btns', 1) }}
        </UiButton>
      </UiDialogClose>
      <UiButton :loading type="submit" size="sm" variant="solid">
        {{ $t('common.edit.btns', 2) }}
      </UiButton>
    </UiDialogFooter>
  </form>
</template>
