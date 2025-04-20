<script setup lang="ts">
import { shallowRef } from 'vue'
import { Icon } from '@iconify/vue'
import { taskMenuItems } from '../../constants/task-menu'
import RemoveTask from '../dialogs/RemoveTask.vue'
import { useTaskMenu } from '../../composables/task-menu'
import type { Task } from '../../types'
import type { ShallowRef } from 'vue'
import BasicDdMenuItem from '@/modules/common/components/BasicDdMenuItem.vue'
import { UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuTrigger } from '@/shared/ui'

const props = defineProps<{
  task: Task
}>()

const removeState = shallowRef(false)

const _dialogsStates: Record<string, ShallowRef<boolean>> = {
  delete: removeState,
}

const { copyTaskId, changeBackground } = useTaskMenu(props.task._id)

function selectDdMenuItem(action: string) {
  const handlers = {
    delete: () => _dialogsStates[action].value = true,
    link: copyTaskId,
    background: changeBackground,
  }
  handlers[action as keyof typeof handlers]()
}
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <Icon
        icon="lucide:ellipsis-vertical"
        class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400 cursor-pointer outline-none mr-1"
      />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent
      align="end"
      :align-offset="-20"
      :side-offset="10"
      class="w-fit min-w-40"
    >
      <BasicDdMenuItem
        v-for="item in taskMenuItems"
        :key="item.prefix"
        :prefix="`task.menu.${item.prefix}`"
        :icon="item.icon"
        @select="selectDdMenuItem(item.prefix)"
      />
    </UiDropdownMenuContent>
  </UiDropdownMenu>
  <RemoveTask :id="props.task._id" v-model:open="removeState" />
</template>
