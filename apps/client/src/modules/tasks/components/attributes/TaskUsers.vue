<script setup lang="ts">
import AttrsWithPopover from './sub/AttrsWithPopover.vue'
import type { User } from '@/modules/auth/types'
import { useBoardsStore } from '@/modules/boards/stores/boards'
import UserLabel from '@/modules/boards/components/additions/UserLabel.vue'
import { useTaskCombobox } from '@/modules/boards/composables/kanban'

const users = defineModel<User[]>('users', { required: true })

const { board } = useBoardsStore()

const [removeEntity, addEntity] = useTaskCombobox(users, '_id')
</script>

<template>
  <AttrsWithPopover
    v-model:items="users"
    :items-in-board="board.users"
    item-id="_id"
    item-value="email"
    :input-placeholder="$t('tasks.users.input_placeholder')"
    @add="addEntity"
    @remove="removeEntity"
  >
    <template #itemBadge>
      <UserLabel
        v-for="user in users"
        :key="user._id"
        :user="user"
        closable
        @remove="removeEntity(user)"
      />
    </template>

    <template #itemInList="{ item: user }">
      <img :src="user.photoUrl" :alt="user.email" class="w-5 h-5 rounded-full" />
      <span>{{ user.email }}</span>
    </template>
  </AttrsWithPopover>
</template>
