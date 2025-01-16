<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router/auto'
import TiptapEditor from '@/modules/editor/components/TiptapEditor.vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'notes-slug',
})
const route = useRoute('notes-slug')

// needs to be fixed
const editorModel = ref('<h1>Untitled</h1><p></p>')
</script>

<template>
  <div>
    <TiptapEditor v-model="editorModel" />
  </div>
</template>
