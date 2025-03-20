<script setup lang="ts">
import { inject, shallowRef } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { BOARD_MENU_KEY } from '../../constants/keys'
import MenuItem from './MenuItem.vue'
import RemoveDialog from '@/modules/common/components/dialogs/RemoveDialog.vue'

const modelOpenWithShortcut = shallowRef(false)
const loading = shallowRef(false)

const { closeMenu } = inject(BOARD_MENU_KEY)!

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
}

const { meta_ctrl_b } = useMagicKeys()

whenever(meta_ctrl_b, () => {
  modelOpenWithShortcut.value = true
})
</script>

<template>
  <RemoveDialog
    v-model:open="modelOpenWithShortcut"
    t-prefix="board"
    :deleting="loading"
    @remove="removeBoard"
  >
    <template #trigger>
      <MenuItem class="hover:!bg-#dc262611 !text-red-500 " t-prefix="delete" shortcut="⌘⌃B" />
    </template>
  </RemoveDialog>
</template>
