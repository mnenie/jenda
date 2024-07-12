<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'Jenda | Settings'
});
</script>

<template>
  <div v-once :class="$style.settings">
    <h4 class="heading-4">Settings</h4>
    <p class="text-sm" style="color: var(--zinc-500)">
      Manage your account settings and set some preferences.
    </p>
  </div>
  <div :class="$style.theme">
    <p class="text-sm" style="font-weight: 500;">Theme</p>
    <span class="text-xs" style="color: var(--zinc-500);">Select the theme for the dashboard.</span>
  </div>
</template>

<style module lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--zinc-200);
}
</style>
