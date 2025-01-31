<script setup lang="ts">
import { watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import { useRouter } from 'vue-router/auto'
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuShortcut,
  UiDropdownMenuTrigger,
} from '@/shared/ui'

const router = useRouter()

const { shift_p, ctrl_x, meta_x } = useMagicKeys()

watch(shift_p, () => {
  router.push({ name: 'welcome' })
})

watch([meta_x, ctrl_x], () => {
  router.push({ name: 'sign-in' })
})
</script>

<template>
  <UiDropdownMenu direction="right">
    <UiDropdownMenuTrigger as-child class="flex items-center justify-center h-16px">
      <div class="flex items-center justify-center h-16px">
        <div
          i-lucide-ellipsis-vertical
          class="cursor-pointer text-large text-neutral-500 dark:text-neutral-400"
        />
      </div>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="w-[200px] mt-12px">
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem @click="router.push({ name: 'welcome' })">
          <span class="text-default font-medium">{{ $t('header.user.welcome') }}</span>
          <UiDropdownMenuShortcut>⇧P</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem>
          <span class="text-default font-medium text-red-500">{{ $t('header.user.logout') }}</span>
          <UiDropdownMenuShortcut>⌘X</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
