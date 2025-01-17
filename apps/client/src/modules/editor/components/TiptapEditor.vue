<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Focus from '@tiptap/extension-focus'
import Link from '@tiptap/extension-link'
import Typography from '@tiptap/extension-typography'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import useHighlighter from '../composables/highlighter'
import useConverter from '../composables/converter'
import BubbleMenu from './BubbleMenu.vue'
import type { Content } from '@tiptap/vue-3'

const props = defineProps<{
  modelValue: Content
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: Content): void
}>()

const { colorHighlighter: ColorHighlighter } = useHighlighter()
const { smilieReplacer: SmilieReplacer } = useConverter()

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emits('update:modelValue', editor.getHTML())
  },
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3, 4],
      },
    }),
    Placeholder.configure({
      placeholder: () => {
        return `Write something, '/' for commands…`
      },
    }),
    Focus.configure({
      className: 'focus-editor',
      mode: 'deepest',
    }),
    Color,
    TextStyle,
    Typography,
    Highlight.configure({
      multicolor: true,
    }),
    Link.configure({
      openOnClick: true,
      defaultProtocol: 'https',
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    ColorHighlighter,
    SmilieReplacer,
  ],
  editable: true,
  autofocus: 'end',
  editorProps: {
    attributes: {
      class: 'jenda-editor',
      spellcheck: 'false',
    },
  },
})

watch(
  () => props.modelValue,
  (value) => {
    if (editor.value) {
      if (editor.value.getHTML() === value)
        return
      editor.value.commands.setContent(props.modelValue, false)
    }
  },
)

onMounted(() => {
  if (editor.value) {
    const emptyParagraph = document.querySelector('.editor-content p:empty')
    if (emptyParagraph instanceof HTMLElement) {
      emptyParagraph.focus()
    }
  }
})
onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<template>
  <div class="overflow-auto">
    <EditorContent :editor />
    <BubbleMenu v-if="editor" :editor />
  </div>
</template>
