<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router/auto'
import { useLocalStorage } from '@vueuse/core'
import NoteDialog from '../../../components/NoteDialog.vue'
import { provideLinterContext } from '../../../composables/linter'
import TiptapEditor from '@/modules/editor/components/TiptapEditor.vue'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'notes-slug',
})
const route = useRoute('notes-slug')

// needs to be fixed
const editorModel = ref(`<h1>${route.params.slug}</h1><p></p>`)

const users = [
  {
    _id: '0',
    email: 'alex@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
  },
  {
    _id: '1',
    email: 'airat@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
  },
  {
    _id: '2',
    email: 'slava@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/83920644?v=4',
  },
  {
    _id: '3',
    email: 'egor@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
  },
]

const isLinterEnabled = useLocalStorage('isLinterEnabled', true)

function toggleLinter() {
  isLinterEnabled.value = !isLinterEnabled.value
}

provideLinterContext({
  isLinterEnabled,
  toggleLinter,
})
</script>

<template>
  <NoteDialog :is-linter-enabled @toggle-linter="toggleLinter">
    <div class="flex flex-col pt-8 gap-2">
      <div class="pl-32 flex items-center gap-3 justify-start">
        <UserAvatars :users="users" :max="2" avatar="!h-24px !w-24px" class="mr-2" />
      </div>
      <TiptapEditor v-model="editorModel" :is-linter-enabled />
    </div>
  </NoteDialog>
</template>
