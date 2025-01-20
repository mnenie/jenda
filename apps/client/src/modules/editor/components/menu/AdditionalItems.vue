<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { nodeMenus as items } from '../../utils/menus'
import type { Editor } from '@tiptap/vue-3'
import { UiButton, UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'

const props = defineProps<{
  editor: Editor
}>()

function selectItem(index: number) {
  const item = items[index]
  if (item) {
    item.command(props)
  }
}
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="ghost" size="sm" class="!h-7 py-0 px-1.5 fw400 gap-1">
        <span class="text-13px mt-0.5">Text</span>
        <span i-lucide-chevron-down class="w-3.5 h-3.5 text-neutral-600" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent
      align="start"
      :side-offset="10"
      class="max-h-44 overflow-y-auto w-fit dark:border-neutral-700/40"
    >
      <UiDropdownMenuItem v-for="item, idx in items" :key="idx" @click="selectItem(idx)">
        <div class="flex items-center gap-2">
          <div v-if="item.icon" class="flex items-center justify-center h-6 w-6 border rounded-md border-neutral-200 dark:border-neutral-700">
            <Icon :icon="item.icon" class="w-3.5 h-3.5" />
          </div>
          <div :class="item.isActive(editor) ? '!text-blue-600 dark:!text-blue-500' : ''" class="flex flex-col">
            <span class="2xl:text-13px text-sm">
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
