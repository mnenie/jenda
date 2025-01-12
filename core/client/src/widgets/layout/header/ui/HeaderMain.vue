<script setup lang="ts" generic="T extends Board">
import { computed, shallowReactive, toRef } from 'vue'
import { Icon } from '@iconify/vue'
import UserMenu from './UserMenu.vue'
import type { Board } from '@/entities/board'
import type { ProjectLink } from '@/shared/config/types-shared'
import { type User, UserAvatar } from '@/entities/user'
import { useLayoutPaths } from '@/shared/composables'
import { links } from '@/shared/constants'
import { HotkeysDialog, ShareDialog } from '@/widgets/dialogs'
import { ShimmerButton } from '@/shared/ui'

const props = defineProps<{
  projects: Board[]
}>()

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
  {
    _id: '2',
    email: 'slava@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/83920644?v=4',
  },
  {
    _id: '3',
    email: 'egor@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
  },
  {
    _id: '4',
    email: 'egor@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
  },
  {
    _id: '5',
    email: 'egor@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
  },
])

const visibleUsers = computed(() => users.slice(0, 3))

const remaining = computed(() => Math.max(users.length - 3, 0))

const userPosition = computed(() => (index: number) => (visibleUsers.value.length - index) * 20)

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
        i-jenda-project
        :style="{ color: active.extendedAttrs.color, fontSize: '20px' }"
      />
      <p v-if="active" class="text-lg mt-1.5px !fw-600 dark:text-neutral-100">
        {{ active.name }}
      </p>
    </div>
    <div />
    <div class="flex items-center h-full gap-2.5">
      <div class="relative flex items-center">
        <UserAvatar
          v-if="remaining > 0"
          :style="{
            right: `0px`,
            zIndex: `${visibleUsers.length + 1}`,
          }"
          class="!h-28px !w-28px absolute flex items-center justify-center text-sm"
        >
          +{{ remaining }}
        </UserAvatar>
        <template v-for="user, idx in visibleUsers" :key="user._id">
          <UserAvatar
            :style="{
              right: `${userPosition(idx)}px`,
              zIndex: `${idx + 1}`,
            }"
            class="!h-28px !w-28px absolute"
          >
            <img :src="user.photoUrl" width="100%" />
          </UserAvatar>
        </template>
      </div>
      <ShareDialog>
        <ShimmerButton shimmer-size="2px">
          <div i-hugeicons-link-04 class="text-neutral-900 dark:text-neutral-100 w-16px h-16px 2xl:(w-4 h-4)" />
          <span
            class="whitespace-pre-wrap text-center text-neutral-800 dark:text-neutral-100 text-sm fw500"
          >
            {{ $t('header.share') }}
          </span>
        </ShimmerButton>
      </ShareDialog>
      <div
        v-tooltip="{ content: $t('header.navigator.messages'), trigger: ['hover'], distance: 7 }"
        i-hugeicons-message-multiple-01
        class="text-base text-neutral-700 cursor-pointer outline-none dark:text-neutral-300"
        style="margin-right: 2px"
      />
      <HotkeysDialog>
        <div
          v-tooltip="{ content: $t('header.navigator.question'), trigger: ['hover'], distance: 7 }"
          i-hugeicons-book-open-01
          class="text-base text-neutral-700 cursor-pointer outline-none dark:text-neutral-300"
          style="margin-right: -1px;"
        />
      </HotkeysDialog>
      <UserMenu />
    </div>
  </header>
</template>
