<script setup lang="ts">
import { RouteNames } from '@/shared/config/consts'
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuLabel,
  UiDropdownMenuSeparator,
  UiDropdownMenuShortcut,
  UiDropdownMenuTrigger,
} from '@/shared/ui'
</script>

<template>
  <UiDropdownMenu direction="right">
    <UiDropdownMenuTrigger as-child>
      <div class="flex items-center justify-center h-17px">
        <div
          i-lucide-ellipsis-vertical
          class="text-base text-neutral-500 dark:text-neutral-400"
        />
      </div>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="w-[200px] mt-4px">
      <UiDropdownMenuLabel class="2xl:text-[13px] sm:text-sm">
        test@gmail.com
      </UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem @click="$router.push({ name: RouteNames.welcome })">
          <span class="2xl:text-xs text-sm font-medium">{{ $t('header.user.welcome') }}</span>
          <UiDropdownMenuShortcut>⇧P</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem>
          <span class="2xl:text-xs text-sm font-medium">{{ $t('header.user.logout') }}</span>
          <UiDropdownMenuShortcut>⌘X</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
