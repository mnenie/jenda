<script setup lang="ts">
import MenuButton from '../handlers/MenuButton.vue'
import type { Editor } from '@tiptap/vue-3'

defineProps<{
  editor: Editor
}>()

const textStyles = [
  { type: 'bold', icon: 'hugeicons:text-bold' },
  { type: 'italic', icon: 'hugeicons:text-italic' },
  { type: 'underline', icon: 'hugeicons:text-underline' },
  { type: 'code', icon: 'nimbus:code' },
  { type: 'strike', icon: 'hugeicons:text-strikethrough' },
]
</script>

<template>
  <div class="flex h-full items-center">
    <MenuButton
      v-for="textStyle in textStyles"
      :key="textStyle.type"
      :is-active="editor.isActive(textStyle.type)"
      :icon="textStyle.icon"
      icon-class="!w-3.4 !h-3.4"
      @click="editor.chain().focus().toggleMark(textStyle.type).run()"
    />
  </div>
</template>
