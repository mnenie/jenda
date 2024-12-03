<script setup lang="ts">
import { Menu } from '@/shared/assets/icons'
import { RouteNames } from '@/shared/config/consts'
import { UiDropdown, UiDropdownItem, UiDropdownShortcut } from '@/shared/ui'
</script>

<template>
  <UiDropdown direction="right">
    <template #trigger>
      <div :class="$style.wrapper">
        <Menu :class="$style.icon" />
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

<style module lang="scss">
.wrapper {
  height: 17px;
}

.icon {
  width: 17px;
  height: 17px;
  color: var(--zinc-500);
  cursor: pointer;
}

:global(html.dark) {
  .icon {
    color: var(--zinc-300);
  }
}
</style>
