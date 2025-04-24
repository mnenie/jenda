<script setup lang="ts">
import { useCommentsQuery } from '../queries/comments'
import CommentsList from './comments/CommentsList.vue'
import InlineCommentEditor from './comments/InlineCommentEditor.vue'
import SectionTabs from './SectionTabs.vue'
import EmptyComments from './comments/EmptyComments.vue'
import DescriptionEditor from './desc-editor/DescriptionEditor.vue'
import EditedBy from './desc-editor/EditedBy.vue'

const { data: comments } = useCommentsQuery()
</script>

<template>
  <SectionTabs class="mt-2">
    <template #comments>
      <div class="h-full w-full overflow-y-hidden bg-transparent">
        <CommentsList v-if="comments?.length" />
        <EmptyComments v-else />
      </div>
      <InlineCommentEditor />
    </template>
    <template #description>
      <div class="h-full w-full bg-transparent">
        <DescriptionEditor v-slot="{ task }">
          <EditedBy :task />
        </DescriptionEditor>
      </div>
    </template>
  </SectionTabs>
</template>
