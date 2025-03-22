<script setup lang="ts">
import { shallowRef } from 'vue'
import UserLabel from '../../additions/UserLabel.vue'
import { useTaskCombobox } from '../../../composables/kanban'
import UserBoxItem from './UsersBoxItem.vue'
import type { UserOption } from '../../../types'
import TaskComboboxFilter from '@/modules/common/components/TaskComboboxFilter.vue'

defineProps<{
  options: UserOption[]
}>()

const users = defineModel<UserOption[]>('users', {
  required: true,
})
const searchTerm = shallowRef()

const [removeUser, addUser] = useTaskCombobox(users, '_id')
</script>

<template>
  <TaskComboboxFilter
    v-model="users"
    v-model:search-term="searchTerm"
    :items="options"
    value-property="email"
    id-property="_id"
    @add="addUser($event)"
  >
    <template #input-content="{ values }">
      <UserLabel
        v-for="user in values"
        :key="user._id"
        :user
        :removable="true"
        class="bg-white dark:bg-neutral-800"
        @remove="removeUser(user)"
      />
    </template>
    <template #box-content="{ item }">
      <UserBoxItem :user="item" />
    </template>
  </TaskComboboxFilter>
</template>
