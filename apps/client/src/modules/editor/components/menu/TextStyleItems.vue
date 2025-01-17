<script setup lang="ts">
import { Tooltip } from 'floating-vue'
import MenuButton from '../handlers/MenuButton.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()

interface TextStyle {
  type: string
  icon: string
  shortcut: string
}

const textStyles: TextStyle[] = [
  { type: 'bold', icon: 'hugeicons:text-bold', shortcut: 'Ctrl+B' },
  { type: 'italic', icon: 'hugeicons:text-italic', shortcut: 'Ctrl+I' },
  { type: 'underline', icon: 'hugeicons:text-underline', shortcut: 'Ctrl+U' },
  { type: 'code', icon: 'nimbus:code', shortcut: 'Ctrl+E' },
  { type: 'strike', icon: 'hugeicons:text-strikethrough', shortcut: 'Ctrl+⇧+S' },
]
</script>

<template>
  <div class="flex h-full items-center">
    <Tooltip v-for="textStyle in textStyles" :key="textStyle.type">
      <MenuButton
        :is-active="editor.isActive(textStyle.type)"
        :icon="textStyle.icon"
        icon-class="!w-3.4 !h-3.4"
        @click="editor.chain().focus().toggleMark(textStyle.type).run()"
      />
      <template #popper>
        <div class="flex flex-col gap-0.5">
          <span class="text-xs">
            {{ textStyle.type }}
          </span>
          <span class="text-xs text-neutral-300 dark:text-neutral-400">
            {{ textStyle.shortcut }}
          </span>
        </div>
      </template>
    </Tooltip>
  </div>
</template>
