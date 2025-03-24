<script setup lang="ts">
import { shallowRef } from 'vue'
import { toast } from 'vue-sonner'
import { useBoardMenuContext } from '../../composables/menu'
import RemoveDialog from '@/modules/common/components/dialogs/RemoveDialog.vue'

const modelOpenWithShortcut = defineModel<boolean>('open')
const loading = shallowRef(false)

const { closeMenu } = useBoardMenuContext()

async function removeBoard() {
  try {
    // _todo[skip_ci]: пофиксить с бэком
    loading.value = true
    await new Promise<void>((resolve, reject) => setTimeout(resolve, 2000))
    modelOpenWithShortcut.value = false
    closeMenu()
    toast.success('success')
  }
  catch {
    loading.value = false
    toast.error('error')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <RemoveDialog
    v-model:open="modelOpenWithShortcut"
    t-prefix="board"
    :deleting="loading"
    @remove="removeBoard"
  >
    <template #trigger>
      <slot :loading />
    </template>
  </RemoveDialog>
</template>
