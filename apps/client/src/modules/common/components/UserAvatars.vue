<script setup lang="ts">
import { computed } from 'vue'
import { type Placement, Tooltip } from 'floating-vue'
import { createReusableTemplate } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'
import type { User } from '@/modules/auth/types'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'
import { cn } from '@/shared/libs/shadcn/utils'

const { tooltip = false, placement = 'bottom', ...props } = defineProps<{
  users: User[]
  class?: HTMLAttributes['class']
  avatar?: HTMLAttributes['class']
  max: number
  tooltip?: boolean
  placement?: Placement
}>()

const countChildren = computed(() => props.users?.length)

const filterChildren = computed(() => {
  if (countChildren.value <= props.max)
    return props.users

  const childrenCopy = [...props.users]

  childrenCopy.splice(props.max, countChildren.value - props.max)

  return childrenCopy
})

const countRemaining = computed(() => countChildren.value - props.max)

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ user }">
    <UserAvatar
      :img="user.photoUrl"
      :class="cn(
        '-me-1.5',
        props.avatar,
      )"
    />
  </DefineTemplate>
  <div :class="cn('flex flex-row', props.class)">
    <template v-for="user in filterChildren" :key="user._id">
      <Tooltip v-if="tooltip" :placement>
        <ReuseTemplate :user />
        <template #popper>
          {{ user.email }}
        </template>
      </Tooltip>
      <ReuseTemplate v-else :user />
    </template>
    <template v-if="countChildren > props.max">
      <UserAvatar
        :class="props.avatar"
      >
        +{{ countRemaining }}
      </UserAvatar>
    </template>
  </div>
</template>
