<script setup lang="ts">
import { TeamBoards } from '@/widgets/boards'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div :class="$style.boards">
    <TeamBoards />
  </div>
</template>

<style module lang="scss">
.boards {
  height: 100%;
  width: 100%;
}
</style>
