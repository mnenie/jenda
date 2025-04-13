<script setup lang="ts">
import { nextTick, shallowRef, useTemplateRef, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useFileDialog, watchDebounced } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useEditComment } from '../../composables/edit-comment.shared'
import { useCommentsMutations } from '../../mutations/comments'
import TiptapEditor from '@/modules/editor/components/TiptapEditor.vue'
import { cn } from '@/shared/libs/shadcn/utils'
import { useUserStore } from '@/modules/auth/stores/auth'

const editor = shallowRef<any>('')

const editorInstance = useTemplateRef<InstanceType<typeof TiptapEditor>>('editorInstance')

const { isEditPanelOpen, editableCommentMessage, closeEditPanel, editingCommentId } = useEditComment()

const { updateComment, createComment } = useCommentsMutations()

const { open, onChange } = useFileDialog({
  accept: 'image/*',
})

const currentFileByUrl = shallowRef<string>()

function setImageToPosition() {
  open()
  onChange((files) => {
    if (!files)
      return
    currentFileByUrl.value = `${window.location.origin}/api/files/${files[0].name}`
    if (editorInstance.value && currentFileByUrl.value)
      editorInstance.value.chaining()?.setImage({ src: currentFileByUrl.value }).run()
  })
}

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

function updateCommentMessage() {
  updateComment({
    _id: editingCommentId.value,
    message: editor.value,
  })
  closeEditPanel()
}

async function createCommentWithClean() {
  createComment({
    message: editor.value,
    user: user.value,
    createdAt: new Date().toISOString(),
  })
  await nextTick(() => {
    const messager = document.getElementById('messager')
    if (messager) {
      messager.scrollTo({
        top: messager.scrollHeight,
        behavior: 'smooth',
      })
    }
  })
  editor.value = ''
}

function postOrUpdateComment() {
  if (isEditPanelOpen.value) {
    updateCommentMessage()
  }
  else {
    createCommentWithClean()
  }
}

watch(editableCommentMessage, (message) => {
  editor.value = message
}, { immediate: true })

watchDebounced(editableCommentMessage, (message) => {
  message && editorInstance.value?.focus()
}, { debounce: 200, flush: 'post' })
</script>

<template>
  <div class="left-4 bottom-0 w-[calc(100%-2rem)] z-10 absolute rounded-lg">
    <Transition name="slide-fade">
      <div v-if="isEditPanelOpen" class="p-2 px-4 pl-6 bg-neutral-100 rounded-md rounded-b-none flex items-center w-full justify-between gap-2 truncate">
        <div class="flex items-center gap-2 max-w-96% h-full relative">
          <div class="min-w-0.5 absolute h-full left--2 bg-blue-500 rounded-lg self-center" />
          <div class=" truncate text-neutral-500 line-clamp-1 ml-1" v-html="editableCommentMessage" />
        </div>
        <Icon icon="lucide:x" class="min-w-4 min-h-4 cursor-pointer text-neutral-500 hover:text-neutral-900 transition-colors" @click="closeEditPanel" />
      </div>
    </Transition>
    <div class="w-full relative">
      <div class="absolute h-full bg-white w-full left-0 rounded-t-lg" />
      <div class="w-full relative items-center">
        <TiptapEditor
          ref="editorInstance"
          v-model="editor"
          :expanded="false"
          section="task.comments"
          :class="cn(
            'max-h-200px !w-full input-filled !px-9 !py-2 overflow-y-auto rounded-md !cursor-text mb-2 space-y-1',
            { '!rounded-t-none !pt-0': isEditPanelOpen },
          )"
        />
        <Icon icon="teenyicons:attach-solid" class="min-w-4.6 min-h-4.6 absolute left-2 flex items-center bottom-4.7" @click="setImageToPosition" />
        <Icon icon="ion:send" class="min-w-5 min-h-5 absolute right-2 flex items-center text-blue-600 bottom-4.6" @click="postOrUpdateComment" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.15s ease-out,
    transform 0.15s ease-out;
  will-change: transform, opacity;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
