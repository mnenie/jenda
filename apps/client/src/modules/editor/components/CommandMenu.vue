<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Editor } from '@tiptap/vue-3'
import { UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'

interface CommandItemProps {
  key: string
  icon?: string
}

const props = defineProps<{
  items: CommandItemProps[]
  editor: Editor
  // eslint-disable-next-line ts/no-unsafe-function-type
  command: Function
}>()

function selectItem(index: number) {
  const item = props.items[index]
  if (item) {
    props.command(item)
  }
}
</script>

<template>
  <UiDropdownMenu :default-open="true">
    <UiDropdownMenuTrigger />
    <UiDropdownMenuContent
      :loop="true"
      :portal="true"
      side="right"
      :side-offset="10"
      align="start"
      :align-offset="-30"
      class="max-h-64 overflow-y-auto"
    >
      <UiDropdownMenuItem v-for="item, idx in items" :key="idx" @click="selectItem(idx)">
        <div class="flex items-center gap-2">
          <div v-if="item.icon" class="flex items-center justify-center h-8 w-8 border rounded-md border-neutral-200 dark:border-neutral-700">
            <Icon :icon="item.icon" class="w-4 h-4" />
          </div>
          <div class="flex flex-col">
            <span class="text-13px">
              {{ $t(`note.editor.nodes.${item.key}.title`) }}
            </span>
            <span class="text-xs text-neutral-600 dark:text-neutral-400">
              {{ $t(`note.editor.nodes.${item.key}.description`) }}
            </span>
          </div>
        </div>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
