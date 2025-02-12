<script setup lang="ts">
import LinkItem from './LinkItem.vue'
</script>

<template>
  <LinkItem
    :link="{
      name: 'settings',
      pathName: 'settings',
      icon: 'hugeicons:setting-07',
    }"
    t-prefix="settings"
    class="mb-1"
  />
</template>
