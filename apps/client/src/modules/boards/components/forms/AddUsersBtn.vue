<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { User } from '@/modules/auth/types'
import {
  UiButton,
  UiCommand,
  UiCommandEmpty,
  UiCommandGroup,
  UiCommandInput,
  UiCommandItem,
  UiCommandList,
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '@/shared/ui'

export type UserOption = Pick<User, '_id' | 'email' | 'photoUrl'>

const { usersInWorkspace } = defineProps<{ usersInWorkspace: UserOption[] }>()

const users = defineModel<UserOption[]>('users', { required: true })

function onSelected(option: UserOption) {
  const index = users.value.findIndex(user => user._id === option._id)
  const addedUsers = [...users.value]

  if (index > -1) {
    addedUsers.splice(index, 1)
  }
  else {
    addedUsers.push(option)
  }

  users.value = addedUsers
}
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton
        variant="outline"
        class="text-muted-foreground min-w-[200px] flex justify-left"
      >
        <Icon icon="hugeicons:plus-sign-square" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        <span>{{ $t('kanban.column.tasks.forms.creating.users.placeholder') }}</span>
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0">
      <UiCommand>
        <UiCommandInput :placeholder="$t('kanban.column.tasks.forms.creating.users.commandSearch')" />
        <UiCommandList>
          <UiCommandEmpty class="p-2">
            {{ $t('kanban.column.tasks.forms.creating.users.commandEmpty') }}
          </UiCommandEmpty>
          <UiCommandGroup :heading="$t('kanban.column.tasks.forms.creating.users.commandHeading')">
            <UiCommandItem
              v-for="i in usersInWorkspace"
              :key="i._id"
              class="flex items-center justify-between"
              :value="i.email"
              @select="onSelected(i)"
            >
              <div class="flex items-center gap-2">
                <img v-if="i.photoUrl" :src="i.photoUrl" class="w-6 h-6 rounded-full" />
                <span>{{ i.email }}</span>
              </div>
              <div class="flex h-4 w-4 items-center justify-center">
                <div
                  v-if="users?.some((user) => user._id === i._id)"
                  i-lucide-check
                  class="h-4 w-4"
                />
              </div>
            </UiCommandItem>
          </UiCommandGroup>
        </UiCommandList>
      </UiCommand>
    </UiPopoverContent>
  </UiPopover>
</template>
