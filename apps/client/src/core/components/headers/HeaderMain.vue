<script setup lang="ts" generic="T extends Board">
import { shallowReactive } from 'vue'
import { Icon } from '@iconify/vue'
import UserMenu from './UserMenu.vue'
import BreadcrumbItem from './BreadcrumbItem.vue'
import type { Board } from '@/modules/boards/types'
import type { User } from '@/modules/auth/types'
import ShareDialog from '@/modules/common/components/dialogs/ShareDialog.vue'
import HotkeysDialog from '@/modules/common/components/dialogs/HotkeysDialog.vue'
import { ShimmerButton } from '@/shared/ui'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'
import { useBreadcrumbs } from '@/shared/composables/breadcrumbs'

// needs to be fixed with backend
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
])

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <header
    class="sticky top-0 left-0 right-0 z-999 w-full flex items-center justify-between px-15px py-8px min-h-52px max-h-52px
    border-b border-b-solid border-layout"
  >
    <div class="inline-flex items-center gap-1">
      <div v-for="(breadcrumb, idx) in breadcrumbs" :key="idx" class="inline-flex items-center gap-1">
        <BreadcrumbItem :breadcrumb="breadcrumb" />
        <Icon
          v-if="idx < breadcrumbs.length - 1"
          icon="heroicons:slash-20-solid"
          class="text-18px mt-0.5 text-neutral-400 dark:text-neutral-600"
        />
      </div>
    </div>
    <div />
    <div class="flex items-center h-full gap-2.5">
      <UserAvatars :users="users" :max="3" avatar="!w-28px !h-28px" />
      <ShareDialog>
        <ShimmerButton shimmer-size="2px">
          <div i-hugeicons-link-04 class="text-neutral-900 dark:text-neutral-100 w-16px h-16px 2xl:(w-4 h-4)" />
          <span
            class="whitespace-pre-wrap text-center text-neutral-800 dark:text-neutral-100 text-base 2xl:text-sm fw500"
          >
            {{ $t('header.share') }}
          </span>
        </ShimmerButton>
      </ShareDialog>
      <div
        v-tooltip="{ content: $t('header.navigator.messages'), trigger: ['hover'], distance: 7 }"
        i-hugeicons-message-multiple-01
        class="text-large text-neutral-700 cursor-pointer outline-none dark:text-neutral-300"
        style="margin-right: 2px"
      />
      <HotkeysDialog>
        <div
          v-tooltip="{ content: $t('header.navigator.question'), trigger: ['hover'], distance: 7 }"
          i-hugeicons-book-open-01
          class="text-large text-neutral-700 cursor-pointer outline-none dark:text-neutral-300"
          style="margin-right: -1px;"
        />
      </HotkeysDialog>
      <UserMenu />
    </div>
  </header>
</template>
