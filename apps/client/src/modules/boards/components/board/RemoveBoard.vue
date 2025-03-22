<script setup lang="ts">
import { shallowRef } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { toast } from 'vue-sonner'
import RemoveDialog from '@/modules/common/components/dialogs/RemoveDialog.vue'
import { UiBadge, UiDropdownMenuItem, UiDropdownMenuShortcut } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'closeMenu'): void
}>()

const modelOpenWithShortcut = shallowRef(false)
const loading = shallowRef(false)

async function removeBoard() {
  try {
    // _todo[skip_ci]: пофиксить с бэком
    loading.value = true
    await new Promise<void>((resolve, reject) => setTimeout(reject, 2000))
    modelOpenWithShortcut.value = false
    toast.success('success')
    emit('closeMenu')
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
      <UiDropdownMenuItem
        class="hover:!bg-#dc262611 !text-red-500 cursor-pointer"
        @select.prevent
      >
        <span class="text-default fw370">{{ $t('board.menu.delete') }}</span>
        <UiDropdownMenuShortcut class="text-neutral-500">
          <UiBadge variant="secondary" class="px-1 py-px">
            ⌘⌃B
          </UiBadge>
        </UiDropdownMenuShortcut>
      </UiDropdownMenuItem>
    </template>
  </RemoveDialog>
</template>
