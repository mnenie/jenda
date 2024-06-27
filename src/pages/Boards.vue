<script setup lang="ts">
import { ChartsBlock, TeamBoards } from '@/widgets/boards';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Dizzo - cloud program for project and task management'
});
</script>

<template>
  <div :class="$style.boards">
    <TeamBoards />
    <ChartsBlock />
  </div>
</template>

<style module lang="scss">
.boards {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 30px 45px;
}
</style>
