<script setup lang="ts">
import MenuButton from '../handlers/MenuButton.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()
</script>

<template>
  <MenuButton
    icon="hugeicons:text-color"
    :is-active="editor.isActive('highlight')"
    @click="editor.chain().focus().toggleHighlight({ color: '#b197fc55' }).run()"
  >
    <template #badge>
      <div class="absolute top-1 right-1 bg-#b197fc77 rounded-md w-1.5 h-1.5" />
    </template>
  </MenuButton>
</template>
