<script setup lang="ts">
import { useRoute } from 'vue-router/auto'
import { useLinterContext } from '../../composables/linter'
import {
  UiBadge,
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuItem,
  UiDropdownMenuTrigger,
} from '@/shared/ui'
import { UiSwitch } from '@/shared/ui/switch'

const route = useRoute('notes-slug')

const { isLinterEnabled, toggleLinter } = useLinterContext()
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger class="flex items-center gap-1 bg-transparent cursor-pointer">
      <span class="text-sm">{{ route.params.slug }}</span>
      <span i-lucide-chevron-down class="text-sm text-neutral-600 dark:text-neutral-400" />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="start" class="w-fit p-1">
      <UiDropdownMenuItem class="justify-start relative 2xl:text-13px text-sm fw400 cursor-pointer gap-1.5" @select.prevent>
        <UiSwitch :default-checked="isLinterEnabled" class="h-4.6" @update:checked="toggleLinter" />
        <span>{{ $t('note.actions', 1) }}</span>
        <UiBadge variant="secondary" class="ml-2 px-1 py-0 text-8px opacity-90">
          EXPERIMENTAL
        </UiBadge>
      </UiDropdownMenuItem>
      <UiDropdownMenuItem class="justify-start relative 2xl:text-13px text-sm !text-red-500 text-sm fw400 cursor-pointer gap-1.5">
        <span>{{ $t('note.actions', 2) }}</span>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
