<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import type { ChoosingWorkspaceItem } from '@/modules/workspace/types'
import ChoosingButton from '@/modules/workspace/components/ChoosingButton.vue'
import { UiButton, UiFormField, UiFormLabel, UiFormMessage } from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'

defineProps<{
  workspaces: ChoosingWorkspaceItem[]
}>()

const validationSchema = toTypedSchema(
  z.object({
    workspace: z.string().min(1),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: workspace } = useField<string>('workspace')

const router = useRouter()
function handleWorkspaceChoose(id: string) {
  // console.log(id)
  workspace.value = id
}

const onChanger = handleSubmit((values) => {
  router.push({ name: 'boards' })
})
</script>

<template>
  <form @submit.prevent="onChanger">
    <div class="grid gap-6">
      <UiFormField v-auto-animate class="flex flex-col gap-3">
        <UiFormLabel
          for="workspaces"
        >
          {{ $t('authentication.workspace.choosing.label') }}
        </UiFormLabel>
        <div class="flex flex-col gap-3 max-h-200px overflow-auto">
          <ChoosingButton
            v-for="w in workspaces"
            :key="w._id"
            :item="w"
            @choose="handleWorkspaceChoose(w._id)"
          />
        </div>
        <UiFormMessage v-if="errors.workspace" :content="errors.workspace" />
      </UiFormField>
      <UiButton size="md" type="submit">
        {{ $t('authentication.workspace.route') }}
      </UiButton>
    </div>
  </form>
</template>
