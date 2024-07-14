<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { SettingsElements } from '@/widgets/settings';

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
  <SettingsElements />
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
