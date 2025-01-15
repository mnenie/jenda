<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWorkspaceStore } from '@/modules/workspace/stores/workspace'
import WorkspaceMenu from '@/modules/workspace/components/WorkspaceMenu.vue'
import { useExpandedContext } from '@/shared/composables/expanded'
import { UiBadge } from '@/shared/ui'

const { isExpanded, onToggleArea } = useExpandedContext()

const workspaceStore = useWorkspaceStore()
const { workspace } = storeToRefs(workspaceStore)
</script>

<template>
  <div
    class="w-full flex items-center"
    :class="[isExpanded ? ' pl-10px px-14px py-8px min-h-52px max-h-52px border-b border-b-solid border-layout' : 'pt-16px pb-26px']"
  >
    <div
      class="w-full flex items-center"
      :style="{ justifyContent: isExpanded ? 'space-between' : 'center' }"
    >
      <div
        v-show="isExpanded"
        class="flex items-center gap-px"
      >
        <WorkspaceMenu>
          <div
            class="w-36px h-36px h-full bg-neutral-100 border border-solid border-neutral-200 rounded-lg flex items-center justify-center mr-1.5 cursor-pointer"
          >
            <img src="https://avatars.githubusercontent.com/u/185750893?s=100&v=4" class="object-cover w-full rounded-lg" />
          </div>
        </WorkspaceMenu>
        <div class="flex flex-col mt-1">
          <div class="flex items-center gap-1 whitespace-nowrap">
            <UiBadge variant="outline" class="px-1 py-1 h-12px text-8px rounded">
              {{ workspace.plan }}
            </UiBadge>
            <p class="text-xs -mt-px text-neutral-700 dark:text-neutral-300">
              {{ $t('sidebar.section') }}
            </p>
          </div>
          <p class="text-lg 2xl:text-base !fw600 dark:text-neutral-100">
            {{ workspace.name }}
          </p>
        </div>
      </div>
      <div
        v-if="isExpanded"
        i-hugeicons-sidebar-left-01
        class="cursor-pointer text-19px 2xl:text-xl text-neutral-700 dark:text-neutral-300"
        @click="onToggleArea"
      />
      <div
        v-else
        i-hugeicons-sidebar-right-01
        class="cursor-pointer text-19px 2xl:text-xl text-neutral-800 dark:text-neutral-200"
        @click="onToggleArea"
      />
    </div>
  </div>
</template>
