<script setup lang="ts">
import { shallowRef } from 'vue'
import { toast } from 'vue-sonner'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import { useKanbanContext } from '../../composables/kanban'
import RemoveDialog from '@/modules/common/components/dialogs/RemoveDialog.vue'

const loading = shallowRef(false)
const model = defineModel<boolean>('open')

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const { id } = useKanbanContext()

async function removeColumn() {
  loading.value = true
  await new Promise<void>(resolve => setTimeout(resolve, 500))
  try {
    const columns = board.value.columns
    const index = columns?.findIndex(column => column._id === id)
    columns?.splice(index!, 1)

    model.value = false
    toast.success('success')
  }
  catch {
    toast.error('error')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <RemoveDialog v-model:open="model" t-prefix="kanban.column" :deleting="loading" @remove="removeColumn">
    <template #trigger>
      <slot :loading />
    </template>
  </RemoveDialog>
</template>
