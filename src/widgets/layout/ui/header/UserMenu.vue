<script setup lang="ts">
import { UiDropdown, UiDropdownItem, UiDropdownShortcut } from '@/shared/ui';
import { RouteNames } from '@/shared/config/consts';
import MenuIcon from '@/shared/assets/icons/_basic/menu.svg?component';
</script>

<template>
  <UiDropdown style="height: 17px;" >
    <template #trigger>
      <MenuIcon :class="$style.icon" />
    </template>
    <template #header>
      <span class="text-sm" style="font-weight: 500">1alexpeshkov@gmail.com</span>
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
.icon {
  width: 17px;
  height: 17px;
  color: var(--zinc-500);
  cursor: pointer;
}

:global(html.dark){
  .icon {
    color: var(--zinc-300);
  }
}
</style>
