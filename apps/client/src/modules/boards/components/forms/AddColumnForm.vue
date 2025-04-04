<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useField, useForm } from 'vee-validate'
import { createReusableTemplate } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import NameWithColor from './edit-sub/NameWithColor.vue'
import { UiButton, UiDialogFooter, UiFormField, UiFormLabel, UiFormMessage, UiTextarea } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
const popoverModel = ref(false)

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)

const validationSchema = toTypedSchema(
  z.object({
    title: z.string().min(2),
  }),
)

const { handleSubmit } = useForm({
  validationSchema,
})

const { value: title } = useField<string>('title', {}, { initialValue: '' })

const color = shallowRef<string>('#ffffff')
const description = shallowRef<string>('')

const loading = shallowRef(false)

// TODO: link to backend
const addColumn = handleSubmit(async (values) => {
  loading.value = true
  await new Promise<void>(resolve => setTimeout(resolve, 500))
  try {
    const newColumn = {
      _id: Math.random().toString(),
      title: values.title,
      description: description.value,
      cards: [],
      estimate: 0,
      limit: undefined,
      color: color.value,
    }
    if (board.value) {
      board.value.columns!.push(newColumn)
    }

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
</script>

<template>
  <div class="space-y-2">
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
    <form @submit.prevent="addColumn">
      <div>
        <ReuseTemplate field="title" :error="null" /> <!-- TODO: error display -->
        <NameWithColor
          v-model:name="title"
          v-model:color="color"
          v-model:popover="popoverModel"
          t-prefix="kanban.column"
          t-field="title"
        />
      </div>
      <div>
        <ReuseTemplate field="description" />
        <UiTextarea
          id="description"
          v-model="description"
          :placeholder="$t('kanban.column.forms.edit.description.placeholder')"
          class="max-h-100 input-filled shadow-sm"
        />
      </div>
      <UiDialogFooter class="sm:justify-end mt-7">
        <UiDialogClose as-child>
          <UiButton type="button" size="sm" variant="secondary">
            {{ $t('common.edit.btns', 1) }}
          </UiButton>
        </UiDialogClose>
        <UiButton type="submit" size="sm" variant="solid">
          {{ $t('common.edit.btns', 2) }}
        </UiButton>
      </UiDialogFooter>
    </form>
  </div>
</template>
