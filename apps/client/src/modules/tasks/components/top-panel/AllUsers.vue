<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { User } from '@/modules/auth/types'
import type { Task } from '../../types'
import { UiButton, UiPopover, UiPopoverContent, UiPopoverTrigger } from '@/shared/ui'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

const props = defineProps<{
  task: Task
}>()

const uniqueUsersMap = ref<Map<string, User>>(new Map())

const allUsers = computed(() => {
  const usersArray = props.task.commentsGroup?.flatMap(group =>
    group.comments.map(comment => comment.user),
  ) || []
  const _arr = [...usersArray, ...props.task.users]
  _arr.forEach((user) => {
    if (user._id && !uniqueUsersMap.value.has(user._id)) {
      uniqueUsersMap.value.set(user._id, user)
    }
  })
  return Array.from(uniqueUsersMap.value.values())
})
</script>

<template>
  <UiPopover v-slot="{ open }">
    <UiPopoverTrigger as-child>
      <UiButton variant="secondary" class="flex items-center gap-1 !h-unset px-1 py-1">
        <UserAvatars :max="2" :users="allUsers" avatar="!w-21px !h-21px" />
        <Icon
          icon="lucide:chevron-down"
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': open }"
        />
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent align="center" class="p-1.5 flex gap-2 w-fit shadow-none">
      <span class="text-default text-neutral-500 dark:text-neutral-200">
        {{ allUsers.length }} {{ $t('task.panel.tooltip.users') }}:
      </span>
      <div class="flex gap-0.5">
        <UserAvatar
          v-for="user in allUsers"
          :key="user._id"
          v-tooltip.bottom="{
            content: user.email,
            delay: 100,
            triggers: ['hover'],
          }"
          :img="user.photoUrl"
          class="!w-21px !h-21px"
        />
      </div>
    </UiPopoverContent>
  </UiPopover>
</template>
