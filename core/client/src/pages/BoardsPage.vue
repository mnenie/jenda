<script setup lang="ts">
import { TeamBoards } from '@/widgets/boards'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div class="w-full h-full">
    <TeamBoards />
  </div>
</template>
