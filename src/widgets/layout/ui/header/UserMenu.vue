<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UserAvatar } from '@/entities/user';
import { UiDropdown, UiDropdownItem, UiDropdownShortcut } from '@/shared/ui';

const { t } = useI18n();
</script>

<template>
  <UiDropdown>
    <template #trigger>
      <UserAvatar>
        <img src="https://avatars.githubusercontent.com/u/121057011?v=4" style="width: 100%" />
      </UserAvatar>
    </template>
    <template #header>
      <span class="text-sm" style="font-weight: 500">1alexpeshkov@gmail.com</span>
    </template>
    <template #content>
      <UiDropdownItem>
        {{ t('header.user.welcome') }}
        <UiDropdownShortcut>⌘B</UiDropdownShortcut>
      </UiDropdownItem>
      <UiDropdownItem>
        {{ t('header.user.logout') }}
        <UiDropdownShortcut>⇧⌘Q</UiDropdownShortcut>
      </UiDropdownItem>
    </template>
  </UiDropdown>
</template>
