<script setup lang="ts" generic="T extends Board">
import type { Board } from '@/entities/board'
import type { ProjectLink } from '@/shared/config/types-shared'
import { type User, UserAvatar } from '@/entities/user'
import { useLayoutPaths } from '@/shared/lib/composables'
import { ShimmerButton } from '@/shared/ui'
import { Icon } from '@iconify/vue'
import { computed, shallowReactive, toRef } from 'vue'
import { links } from '../../model'
import UserMenu from './UserMenu.vue'

const props = defineProps<{
  projects: Board[]
}>()

const userPosition = computed(() => {
  return (users: User[], u: User) => {
    return (users.length - 1 - +u._id!) * 18
  }
})

const users = shallowReactive<User[]>([
  {
    _id: '0',
    email: 'alex@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
  },
  {
    _id: '1',
    email: 'airat@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
  },
])

const _projects = toRef(props, 'projects') as unknown as ProjectLink[]

const { active } = useLayoutPaths(links, _projects)
</script>

<template>
  <header
    class="sticky top-0 left-0 right-0 z-999 w-full flex items-center justify-between px-15px py-8px min-h-52px max-h-52px
    border-b border-b-solid border-layout"
  >
    <div class="inline-flex items-center gap-3">
      <Icon
        v-if="active.extendedAttrs.icon"
        :icon="active.extendedAttrs.icon"
        class="text-20px text-neutral-800 dark:text-neutral-200"
      />
      <div
        v-if="active.extendedAttrs.color"
        i-jenda-custom-project
        :style="{ color: active.extendedAttrs.color, fontSize: '20px' }"
      />
      <p v-if="active" class="text-lg mt-1.5px !fw-600 dark:text-neutral-100">
        {{ active.name }}
      </p>
    </div>
    <div />
    <div class="flex items-center h-full gap-2.5">
      <div class="relative flex items-center h-20px w-20px">
        <template v-for="user in users" :key="user._id">
          <UserAvatar
            :style="{
              right: `${userPosition(users, user)}px`,
              zIndex: userPosition(users, user),
              border: `1px solid ${user._id === '0' ? 'var(--blue-secondary)' : 'var(--zinc-300)'}`,
            }"
            class="!h-28px !w-28px absolute"
          >
            <img :src="user.photoUrl" width="100%" />
          </UserAvatar>
        </template>
      </div>
      <ShimmerButton shimmer-size="2px">
        <div i-hugeicons-user-multiple-02 class="text-neutral-900 dark:text-neutral-100 text-sm" />
        <span
          class="whitespace-pre-wrap text-center text-neutral-800 dark:text-neutral-100 text-sm fw500"
        >
          {{ $t('header.share') }}
        </span>
      </ShimmerButton>
      <div
        v-tooltip="{ content: $t('header.navigator.messages'), trigger: ['hover'], distance: 7 }"
        i-hugeicons-message-multiple-01
        class="text-base text-neutral-700 cursor-pointer outline-none dark:text-neutral-300"
        style="margin-right: 2px"
      />
      <div
        v-tooltip="{ content: $t('header.navigator.question'), trigger: ['hover'], distance: 7 }"
        i-hugeicons-book-open-01
        class="text-base text-neutral-700 cursor-pointer outline-none dark:text-neutral-300"
        style="margin-right: -1px;"
      />
      <UserMenu />
    </div>
  </header>
</template>
