<script setup lang="ts">
import { type HTMLAttributes, onBeforeUnmount, onMounted, watch } from 'vue'
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
import Image from '@tiptap/extension-image'
import { useI18n } from 'vue-i18n'
import Blockquote from '@tiptap/extension-blockquote'
import Underline from '@tiptap/extension-underline'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { twMerge } from 'tailwind-merge'
import useHighlighter from '../composables/highlighter'
import useConverter from '../composables/converter'
import { SlashMenu } from '../plugins/suggestions'
import Linter, { Punctuation, SingleH1 } from '../plugins/linter'
import BubbleMenu from './BubbleMenu.vue'
import type { Content } from '@tiptap/vue-3'

const { section = 'note', expanded = true, ...props } = defineProps<{
  modelValue: Content
  isLinterEnabled?: boolean
  class?: HTMLAttributes['class']
  section?: 'note' | 'task.comments'
  expanded?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: Content): void
}>()

const { colorHighlighter: ColorHighlighter } = useHighlighter()
const { smilieReplacer: SmilieReplacer } = useConverter()

const { t } = useI18n()

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emits('update:modelValue', editor.getHTML())
  },
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }),
    Linter.configure({
      plugins: [Punctuation, SingleH1],
    }),
    Placeholder.configure({
      emptyEditorClass: 'is-empty',
      emptyNodeClass: 'is-empty',
      placeholder: () => {
        return t(`${section}.editor.placeholder`)
      },
    }),
    SlashMenu,
    Focus.configure({
      className: 'focus-editor',
      mode: 'deepest',
    }),
    TaskItem.configure({
      nested: true,
    }),
    TaskList,
    Blockquote,
    Underline,
    Color,
    TextStyle,
    Typography,
    Image.configure({
      allowBase64: true,
    }),
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
      class: twMerge(['jenda-editor', props.class]),
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

watch(() => editor.value, () => {
  if (expanded && editor.value) {
    const PluginExt = editor.value.extensionManager.extensions.find(ext => ext.name === 'placeholder')
    PluginExt!.options!.emptyNodeClass = 'is-empty-expanded'
  }
}, { immediate: true, flush: 'post' })

watch(() => props.class, (classVal) => {
  if (classVal && editor.value) {
    editor.value.setOptions({
      editorProps: {
        attributes: {
          class: twMerge(['jenda-editor', classVal]),
        },
      },
    })
  }
})

// BAD: with tiptap rules :/
watch(() => props.isLinterEnabled, () => {
  if (editor.value) {
    editor.value.commands.setContent(props.modelValue, false)
  }
}, { flush: 'post' })

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

defineExpose({
  focus: () => editor.value?.commands.focus(),
  chaining: () => editor.value?.chain().focus(),
})
</script>

<template>
  <div class="overflow-auto">
    <EditorContent :editor />
    <BubbleMenu v-if="editor" :editor :expanded />
  </div>
</template>
