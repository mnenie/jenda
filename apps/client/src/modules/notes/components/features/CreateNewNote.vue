<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { useRoute, useRouter } from 'vue-router/auto'
import NoteDialog from '../NoteDialog.vue'
import AddNote from './handlers/AddNote.vue'
import type { ButtonVariants, UiDialog } from '@/shared/ui'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  variant: ButtonVariants['variant']
  plural: number
}>()

const router = useRouter()
const route = useRoute()

const dialog = useTemplateRef<InstanceType<typeof UiDialog> | null>('dialog')

const isDialogOpen = ref(false)

function toggleModalRoute() {
  if (dialog.value && !dialog.value.open && route.name === 'notes-slug') {
    router.back()
  }
}
</script>

<template>
  <AddNote
    :variant
    :plural
    @add="isDialogOpen = true,
          router.push(
            {
              name: 'notes-slug',
              params: { slug: 'undefined' },
            },
          )"
  />
  <NoteDialog
    v-if="route.name === 'notes-slug'"
    ref="dialog"
    :open="isDialogOpen"
    @update:open="toggleModalRoute"
  />
</template>
