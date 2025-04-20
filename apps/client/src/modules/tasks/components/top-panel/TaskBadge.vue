<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useTaskMenu } from '../../composables/task-menu'
import { UiButton } from '@/shared/ui'

const props = defineProps<{
  id: string
}>()

const { copyTaskId } = useTaskMenu(props.id)
</script>

<template>
  <UiButton
    variant="secondary"
    class="flex items-center gap-1 text-neutral-500 !h-unset px-1.5 py-0.5 dark:text-neutral-200"
    @click="copyTaskId"
  >
    <span class="text-13px 2xl:text-small">#{{ id }}</span>
    <Icon icon="hugeicons:link-04" class="w-4 h-4" />
  </UiButton>
</template>
