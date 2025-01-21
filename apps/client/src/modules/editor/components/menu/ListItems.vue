<script setup lang="ts">
import MenuButton from '../handlers/MenuButton.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()

const lists = [
  { type: 'bulletList', icon: 'f7:list-bullet' },
  { type: 'orderedList', icon: 'fe:list-order' },
]
</script>

<template>
  <div class="flex h-full items-center">
    <MenuButton
      v-for="list in lists"
      :key="list.type"
      :is-active="editor.isActive(list.type)"
      :icon="list.icon"
      icon-class="!w-3.2 !h-3.2"
      @click="editor.chain().focus().toggleList(list.type, 'listItem').run()"
    />
    <div class="w-1px h-4.5 mx-1 bg-neutral-200 dark:bg-neutral-700" />
  </div>
</template>
