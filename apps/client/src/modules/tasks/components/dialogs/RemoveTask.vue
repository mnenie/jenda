<script setup lang="ts">
import { watch } from 'vue'
import { toast } from 'vue-sonner'
import { refAutoReset } from '@vueuse/core'
import { useTaskMutations } from '../../mutations/task'
import RemoveDialog from '@/modules/common/components/dialogs/RemoveDialog.vue'

const props = defineProps<{
  id: string
}>()

const modelOpen = defineModel<boolean>('open')

const { deleteTask, isDeleting, deleteError } = useTaskMutations()

const deletingStatusDelayed = refAutoReset(false, 2000)

async function removeTask() {
  deleteTask(props.id)
  if (deleteError.value) {
    toast.error(deleteError.value.message)
  }
}

watch(isDeleting, (val) => {
  val && (deletingStatusDelayed.value = val)
})

watch(deletingStatusDelayed, (val) => {
  !val && (modelOpen.value = false)
})
</script>

<template>
  <RemoveDialog
    v-model:open="modelOpen"
    t-prefix="task"
    :deleting="deletingStatusDelayed"
    @remove="removeTask"
  >
    <template #trigger>
      <slot :loading="deletingStatusDelayed" />
    </template>
  </RemoveDialog>
</template>
