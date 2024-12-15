<script setup lang="ts">
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
import { useMagicKeys } from '@vueuse/core'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { shift_p, ctrl_x, meta_x } = useMagicKeys()

watch(shift_p, () => {
  router.push('/')
})

watch([meta_x, ctrl_x], () => {
  router.push('/auth/sign-in')
})
</script>

<template>
  <UiDropdownMenu direction="right">
    <UiDropdownMenuTrigger as-child>
      <div class="flex items-center justify-center h-17px">
        <div
          i-lucide-ellipsis-vertical
          class="cursor-pointer text-base text-neutral-500 dark:text-neutral-400"
        />
      </div>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="w-[200px] mt-6px">
      <UiDropdownMenuLabel class="text-sm">
        test@gmail.com
      </UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem @click="$router.push('/')">
          <span class="2xl:text-13px text-sm font-medium">{{ $t('header.user.welcome') }}</span>
          <UiDropdownMenuShortcut>⇧P</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem>
          <span class="2xl:text-13px text-sm font-medium text-red-500">{{ $t('header.user.logout') }}</span>
          <UiDropdownMenuShortcut>⌘X</UiDropdownMenuShortcut>
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
