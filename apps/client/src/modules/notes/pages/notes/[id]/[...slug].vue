<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router/auto'
import NoteDialog from '../../../components/NoteDialog.vue'
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
]
</script>

<template>
  <NoteDialog>
    <div class="flex flex-col pt-8 gap-2">
      <div class="pl-32 flex items-center gap-3 justify-start">
        <UserAvatars :users="users" :max="3" avatar="!h-24px !w-24px" class="mr-2" />
      </div>
      <TiptapEditor v-model="editorModel" />
    </div>
  </NoteDialog>
</template>
