<script setup lang="ts">
import { RouteNames } from '@/shared/config/consts'
import { UiDropdown, UiDropdownItem, UiDropdownShortcut } from '@/shared/ui'
</script>

<template>
  <UiDropdown direction="right">
    <template #trigger>
      <div :class="$style.wrapper">
        <div i-lucide-ellipsis-vertical :class="$style.icon" text-base />
      </div>
    </template>
    <template #header>
      <span class="text-sm" style="font-weight: 500">test@gmail.com</span>
    </template>
    <template #content>
      <UiDropdownItem @click="$router.push({ name: RouteNames.welcome })">
        {{ $t('header.user.welcome') }}
        <UiDropdownShortcut>⌘B</UiDropdownShortcut>
      </UiDropdownItem>
      <UiDropdownItem>
        {{ $t('header.user.logout') }}
        <UiDropdownShortcut>⇧⌘Q</UiDropdownShortcut>
      </UiDropdownItem>
    </template>
  </UiDropdown>
</template>

<style module>
.wrapper {
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: var(--zinc-500) !important;
  cursor: pointer;
}

:global(html.dark) {
  .icon {
    color: var(--zinc-300) !important;
  }
}
</style>
