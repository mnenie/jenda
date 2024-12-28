<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import {
  UiAlert,
  UiBadge,
  UiDialog,
  UiDialogContent,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

defineOptions({
  inheritAttrs: false,
})

const badges = [
  { system: 'cmd/ctrl', key: 'K' },
  { system: '⇧', key: 'P' },
  { system: 'cmd/ctrl', key: 'X' },
] as const

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ data }">
    <UiBadge variant="secondary" class="px-1.5 py-0.5 flex items-center justify-center text-xs">
      {{ data }}
    </UiBadge>
  </DefineTemplate>
  <UiDialog v-bind="$attrs">
    <UiDialogTrigger as-child>
      <slot />
    </UiDialogTrigger>
    <UiDialogContent class="sm:max-w-md">
      <UiDialogHeader class="mb-2">
        <UiDialogTitle>{{ $t('dialogs.hotkeys.title') }}</UiDialogTitle>
      </UiDialogHeader>
      <UiAlert variant="warning" class="mb-2">
        <I18nT keypath="dialogs.hotkeys.alert" tag="span" class="text-sm">
          <template #badge>
            <UiBadge variant="outline" class="px-1.5 py-0 text-xs">
              cmd/ctrl
            </UiBadge>
          </template>
        </I18nT>
      </UiAlert>
      <div class="flex flex-col items-start space-y-3">
        <div v-for="badge, idx in badges" :key="idx" class="flex items-center space-x-1">
          <ReuseTemplate :data="badge.system" />
          <span class="text-sm">+</span>
          <ReuseTemplate :data="badge.key" />
          <span class="text-sm">- {{ $t('dialogs.hotkeys.badges', idx) }}</span>
        </div>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
