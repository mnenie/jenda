<script setup lang="ts">
import CommentsList from './comments/CommentsList.vue'
import WriteNewComment from './comments/WriteNewComment.vue'
import SectionTabs from './SectionTabs.vue'
</script>

<template>
  <SectionTabs>
    <template #comments>
      <div class="h-full w-full overflow-y-auto bg-transparent">
        <CommentsList />
      </div>
      <WriteNewComment />
    </template>
  </SectionTabs>
</template>
