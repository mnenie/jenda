<script setup lang="ts">
import MenuButton from '../handlers/MenuButton.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()

const alignments = [
  { type: 'left', icon: 'hugeicons:text-align-left' },
  { type: 'center', icon: 'hugeicons:text-align-center' },
  { type: 'right', icon: 'hugeicons:text-align-right' },
]
</script>

<template>
  <div class="flex h-full items-center">
    <MenuButton
      v-for="alignment in alignments"
      :key="alignment.type"
      :is-active="editor.isActive({ textAlign: alignment.type })"
      :icon="alignment.icon"
      icon-class="!w-3.6 !h-3.6"
      @click="editor.chain().focus().setTextAlign(alignment.type).run()"
    />
    <div class="w-1px h-4.5 mx-1 bg-neutral-200 dark:bg-neutral-700" />
  </div>
</template>
