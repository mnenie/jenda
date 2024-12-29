<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { createReusableTemplate } from '@vueuse/core'
import {
  UiBadge,
  UiButton,
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '@/shared/ui'
import { ShareDialog } from '@/widgets/dialogs'
import { useWorkspaceStore } from '@/entities/workspace'
import { cn } from '@/shared/libs/shadcn/utils'

defineOptions({
  inheritAttrs: false,
})

const isDialogOpen = ref<boolean>(false)
const isPopoverOpen = ref<boolean>(false)

const workspaceStore = useWorkspaceStore()
const { workspace } = storeToRefs(workspaceStore)

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ icon, data, isSettings }">
    <UiButton
      size="sm"
      variant="ghost"
      :class="
        cn('w-full justify-start px-2 focus:ring-0', isSettings && 'mt-2')"
      @click="isPopoverOpen = false"
    >
      <span v-if="!isSettings" :class="cn(icon, 'w-4 h-4 text-neutral-700 dark:text-neutral-300')" />
      <div
        v-else
        class="w-4 h-4 bg-neutral-100 border border-solid border-neutral-200 rounded-full flex items-center justify-center cursor-pointer"
      >
        <img :src="workspace.img as string" class="object-cover w-full rounded-lg" />
      </div>
      <p class="text-neutral-700 dark:text-neutral-300">
        {{ $t(`workspace.popover.${data}`) }}
      </p>
    </UiButton>
  </DefineTemplate>
  <UiPopover v-bind="$attrs" v-model:open="isPopoverOpen" :modal="false">
    <UiPopoverTrigger as-child>
      <slot />
    </UiPopoverTrigger>
    <UiPopoverContent side="bottom" align="start" class="px-1">
      <div class="relative w-full h-full">
        <div class="flex items-center justify-between gap-1 mb-6 px-2">
          <div class="flex flex-col gap-0.5 mt-1">
            <p class="text-base !fw600 dark:text-neutral-100">
              {{ workspace.name }}
            </p>
            <div class="flex items-center gap-0.5">
              <UiBadge variant="secondary" class="shadow-none px-1 py-0 text-8px">
                {{ workspace.plan }}
              </UiBadge>
              <UiBadge variant="secondary" class="shadow-none px-1 py-0 text-8px">
                <span class="text-blue-500">
                  {{ $t(`workspace.popover.${workspace.status}`) }}
                </span>
              </UiBadge>
              <span class="text-11px mx-1 2xl:text-xs text-neutral-500 dark:text-neutral-400">
                •
              </span>
              <p class="text-11px 2xl:text-xs text-neutral-500 dark:text-neutral-400">
                {{ $t('workspace.popover.members', workspace.members.length) }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span i-lucide-check class="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <p class="px-2 text-xs text-neutral-700 dark:text-neutral-300 mb-1">
            {{ $t('workspace.popover.section') }}
          </p>
          <ReuseTemplate data="pay" icon="i-lucide-credit-card" @click="$router.push({ name: 'welcome' })" />
          <ReuseTemplate data="invite" icon="i-hugeicons-link-04" @click="isDialogOpen = true" />
          <ReuseTemplate data="team" icon="i-hugeicons-user-group" @click="$router.push({ name: 'members' })" />
          <ReuseTemplate :is-settings="true" data="settings" @click="$router.push({ name: 'settings' })" />
        </div>
      </div>
    </UiPopoverContent>
  </UiPopover>
  <ShareDialog v-model:open="isDialogOpen" />
</template>
