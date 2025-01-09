<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { useRoute, useRouter } from 'vue-router/auto'
import type { ButtonVariants, UiDialog } from '@/shared/ui'
import { AddBoard } from '@/features/boards/handlers'
import { NewBoardDialog } from '@/widgets/dialogs'

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
  if (dialog.value && !dialog.value.open && route.name === 'boards-new') {
    router.back()
  }
}
</script>

<template>
  <AddBoard
    :variant
    :plural
    @add="isDialogOpen = true, router.push({ name: 'boards-new' })"
  />
  <NewBoardDialog
    v-if="route.name === 'boards-new'"
    ref="dialog"
    :open="isDialogOpen"
    @update:open="toggleModalRoute"
  />
</template>
