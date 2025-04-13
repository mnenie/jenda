<script setup lang="ts">
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCommentsQuery } from '../../queries/comments'
import CommentItem from './CommentItem.vue'
import type { DateParams } from '@/modules/common/types'
import { DayjsInjectionKey } from '@/plugins/dayjs'

const { t } = useI18n()

const { data: commentsGroup } = useCommentsQuery()

const dayjs = inject(DayjsInjectionKey)!

function formatDate(d: DateParams['createdAt']) {
  if (dayjs(d).isSame(dayjs(), 'day')) {
    return t('task.comments.today')
  }
  if (dayjs(d).isSame(dayjs().subtract(1, 'day'), 'day')) {
    return t('task.comments.yesterday')
  }
  return dayjs(d).format('D MMMM YYYY')
}
</script>

<template>
  <div id="messager" class="flex h-full flex-col overflow-y-auto scrollbar pb-14 mt-1">
    <div v-for="group, groupIndex in commentsGroup" :key="groupIndex">
      <span v-if="group.comments.length" class="text-small text-center text-neutral-400 mt-1 block">
        {{ formatDate(group.date) }}
      </span>
      <CommentItem
        v-for="comment, index in group.comments"
        :key="comment._id"
        :comment
        :link="!(group.comments.length - 1 === index)"
      />
    </div>
  </div>
</template>

<style scoped>
@import '@/styles/_scrollbar.css';
</style>
