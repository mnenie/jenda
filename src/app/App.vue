<script setup lang="ts">
import { useColorMode, useDark } from '@vueuse/core';
import { computed } from 'vue';
import { Toaster } from 'vue-sonner';

type ToasterTheme = 'dark' | 'light';

useColorMode();
const isDark = useDark();

const toasterTheme = computed<ToasterTheme>(() => {
  return isDark.value ? 'dark' : 'light';
});
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="['Login', 'Registration']">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </component>
  <Toaster :theme="toasterTheme" position="bottom-right" />
</template>
