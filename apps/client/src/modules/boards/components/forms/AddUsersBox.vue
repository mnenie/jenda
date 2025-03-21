<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
  TagsInputInput,
  TagsInputRoot,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import UserLabel from '../additions/UserLabel.vue'
import type { UserOption } from '../../types'

defineProps<{
  options: UserOption[]
}>()

const users = defineModel<UserOption[]>('users', { required: true })

const searchTerm = ref('')

function removeUser(user: UserOption) {
  users.value = users.value.filter(u => u._id !== user._id)
}

function addUser(user: UserOption) {
  const index = users.value.findIndex(u => u._id === user._id)
  if (index > -1)
    return users.value.splice(index, 1)
  users.value.push(user)
}
</script>

<template>
  <ComboboxRoot
    v-model:search-term="searchTerm"
    :model-value="users.map(user => user.email)"
    multiple
    class="relative w-full"
  >
    <ComboboxAnchor class="border border-gray-200 dark:border-gray-700 w-full inline-flex items-center justify-between rounded-lg p-2 text-[13px] leading-none gap-[5px] bg-white dark:bg-gray-800 text-grass11 shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
      <TagsInputRoot
        :model-value="users.map(user => user.email)"
        delimiter=""
        class="flex gap-2 items-center rounded-lg flex-wrap w-full"
      >
        <UserLabel
          v-for="user in users"
          :key="user._id"
          :user="user"
          :removable="true"
          @remove="removeUser(user)"
        />

        <ComboboxInput as-child>
          <TagsInputInput
            :placeholder="$t('kanban.column.tasks.forms.creating.users.commandSearch')"
            class="focus:outline-none flex-1 rounded !bg-transparent placeholder:text-mauve10 px-1"
            @keydown.enter.prevent
          />
        </ComboboxInput>
      </TagsInputRoot>

      <ComboboxTrigger class="bg-transparent">
        <Icon icon="radix-icons:chevron-down" class="h-4 w-4" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent class="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 overflow-hidden rounded shadow-lg">
      <ComboboxViewport class="p-[5px] max-h-180px overflow-y-auto">
        <ComboboxEmpty class="text-gray-400 text-xs font-medium text-center py-2">
          {{ $t('kanban.column.tasks.forms.creating.users.commandEmpty') }}
        </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxLabel class="px-2 mb-2 text-xs font-semibold form-label">
            {{ $t('kanban.column.tasks.forms.creating.users.commandHeading') }}
          </ComboboxLabel>

          <ComboboxItem
            v-for="option in options"
            :key="option._id"
            :value="option.email"
            class="flex items-center justify-between text-sm text-gray-800 dark:text-gray-200 h-[30px] px-3 rounded-md select-none cursor-pointer
                   hover:bg-gray-100 dark:hover:bg-gray-700
                   data-[highlighted=true]:bg-blue-100 dark:data-[highlighted=true]:bg-blue-800
                   data-[highlighted=true]:text-blue-900 dark:data-[highlighted=true]:text-blue-100
                   outline-none"
            @click="addUser(option)"
          >
            <UserLabel :user="option" />
            <ComboboxItemIndicator class="mr-2">
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
