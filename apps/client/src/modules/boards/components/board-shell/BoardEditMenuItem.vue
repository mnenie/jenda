<script setup lang="ts">
import { shallowRef } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import EditBoardDialog from '../dialogs/EditBoardDialog.vue'
import MenuItem from './MenuItem.vue'

const emit = defineEmits<{
  (e: 'openForm'): void
}>()

const editModel = shallowRef(false)

const { meta_ctrl_e } = useMagicKeys()

whenever(meta_ctrl_e, () => {
  editModel.value = true
})
</script>

<template>
  <EditBoardDialog v-model:open="editModel">
    <template #trigger>
      <MenuItem t-prefix="edit" shortcut="⌘⌃E" @click="emit('openForm')" />
    </template>
  </EditBoardDialog>
</template>
