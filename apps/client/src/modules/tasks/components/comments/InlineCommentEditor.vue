<script setup lang="ts" generic="T extends typeof TiptapEditor, E extends InstanceType<T>">
import { shallowRef, useTemplateRef, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useCommentInteractions } from '../../composables/comment-interactions.shared'
import { useCommentEditor } from '../../composables/editor'
import type { ShallowRef } from 'vue'
import TiptapEditor from '@/modules/editor/components/TiptapEditor.vue'
import { cn } from '@/shared/libs/shadcn/utils'

const editor = shallowRef<string>('')

const editorInstance = useTemplateRef<E>('editorInstance')

const { isPanelOpen, action, commentMessage, closeEditOrReplyPanel, contextMenuState } = useCommentInteractions()

const { setImageToPosition, postOrUpdateComment } = useCommentEditor<T, E>(
  editorInstance as Readonly<ShallowRef<E>>,
  editor,
)

watch([contextMenuState, commentMessage], () => {
  editorInstance.value?.focus()
}, { flush: 'post' })

watch(commentMessage, (message) => {
  if (action.value !== 'reply') {
    editor.value = message
  }
}, { immediate: true })
</script>

<template>
  <div class="left-4 bottom-0 w-[calc(100%-2rem)] z-10 absolute rounded-lg">
    <Transition name="slide-fade">
      <div v-if="isPanelOpen" class="p-2 px-4 pl-6 bg-neutral-100 rounded-md rounded-b-none flex items-center w-full justify-between gap-2 truncate dark:bg-#2e2e2e">
        <div class="flex items-center gap-2 max-w-96% h-full relative">
          <div class="min-w-0.5 absolute h-full left--2 bg-blue-500 rounded-lg self-center" />
          <div class=" truncate text-neutral-500 line-clamp-1 ml-1" v-html="commentMessage" />
        </div>
        <Icon icon="lucide:x" class="min-w-4 min-h-4 cursor-pointer text-neutral-500 hover:text-neutral-900 transition-colors" @click="closeEditOrReplyPanel" />
      </div>
    </Transition>
    <div class="w-full relative">
      <div class="absolute h-full bg-white w-full left-0 rounded-t-lg dark:bg-neutral-800" />
      <div class="w-full relative items-center">
        <TiptapEditor
          ref="editorInstance"
          v-model="editor"
          :expanded="false"
          section="task.comments"
          :class="cn(
            'max-h-200px !w-full input-filled !px-9 !py-2 overflow-y-auto rounded-md !cursor-text mb-2 space-y-1',
            { '!rounded-t-none !pt-0': isPanelOpen },
          )"
        />
        <Icon icon="teenyicons:attach-solid" class="min-w-4.6 min-h-4.6 absolute left-2 flex items-center bottom-4.7 dark:text-neutral-200" @click="setImageToPosition" />
        <Icon icon="ion:send" class="min-w-5 min-h-5 absolute right-2 flex items-center text-blue-600 bottom-4.6" @click="postOrUpdateComment" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.05s ease-out,
    transform 0.05s ease-out;
  will-change: transform, opacity;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
