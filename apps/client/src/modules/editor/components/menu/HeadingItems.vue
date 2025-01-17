<script setup lang="ts">
import MenuButton from '../handlers/MenuButton.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()

// for tiptap chaining
type Level = 1 | 2 | 3

const headings = [
  { level: 1, icon: 'hugeicons:heading-01' },
  { level: 2, icon: 'hugeicons:heading-02' },
  { level: 3, icon: 'hugeicons:heading-03' },
]
</script>

<template>
  <div class="flex h-full items-center">
    <MenuButton
      v-for="heading in headings"
      :key="heading.level"
      :is-active="editor.isActive('heading', { level: heading.level as Level })"
      :icon="heading.icon"
      @click="editor.chain().focus().toggleHeading({ level: heading.level as Level }).run()"
    />
    <div class="w-1px h-4.5 mx-1 bg-neutral-200 dark:bg-neutral-700" />
  </div>
</template>
