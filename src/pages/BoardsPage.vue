<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ActivityСharts, TeamBoards } from '@/widgets/boards';

useHead({
  title: 'Jenda - cloud program for project and task management'
});
</script>

<template>
  <div :class="$style.boards">
    <TeamBoards />
    <ActivityСharts />
  </div>
</template>

<style module lang="scss">
.boards {
  height: 100%;
  width: 100%;
}
</style>
