<script setup lang="ts">
import { UiContextMenu, UiContextMenuContent, UiContextMenuItem, UiContextMenuTrigger } from '../index'
</script>

<template>
  <UiContextMenu>
    <UiContextMenuTrigger>
      <span>Right click</span>
    </UiContextMenuTrigger>
    <UiContextMenuContent>
      <UiContextMenuItem>Profile</UiContextMenuItem>
      <UiContextMenuItem>Billing</UiContextMenuItem>
    </UiContextMenuContent>
  </UiContextMenu>
</template>
