<script setup lang="ts">
import { ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import type { Editor } from '@tiptap/vue-3'
import {
  UiButton,
  UiInput,
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '@/shared/ui'

const props = defineProps<{
  editor: Editor
}>()

const url = ref('')

function addLink() {
  if (url.value === null) {
    return
  }
  if (url.value === '') {
    props.editor.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }
  props.editor.chain().focus().extendMarkRange('link').setLink({ href: url.value.startsWith('http') ? url.value : `http://${url.value}` }).run()
}

const { copy, copied } = useClipboard()

function copyLink() {
  if (copied.value)
    return
  copy(url.value)
  toast.success(`Successfully copied ${url.value} to clipboard`)
}

watch(() => props.editor.state.selection, () => {
  url.value = props.editor.getAttributes('link').href || ''
})
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton variant="ghost" size="sm" class="!h-7 py-0 px-1.5 fw400 gap-1">
        <span i-hugeicons-link-04 class="w-4 h-4" />
        <span i-lucide-chevron-down class="w-3.5 h-3.5 text-neutral-600" />
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-[200px] mt-6px p-0 relative">
      <UiInput
        v-model="url"
        placeholder="Paste link"
        class="focus:ring-0 border-none text-13px h-8"
        :class="editor.isActive('link') && 'pr-8'"
        @keydown.enter.prevent="addLink"
      />
      <div
        v-if="editor.isActive('link')"
        class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1"
      >
        <div
          i-hugeicons-clipboard
          class="w-3.5 h-3.5 cursor-pointer"
          @click="copyLink"
        />
        <div
          i-hugeicons-delete-02
          class="w-3.5 h-3.5 cursor-pointer text-red-500"
          @click="editor.chain().focus().unsetLink().run()"
        />
      </div>
    </UiPopoverContent>
  </UiPopover>
</template>
