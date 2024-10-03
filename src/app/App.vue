<script setup lang="ts">
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
import { Toaster } from 'vue-sonner';
import { AppLayout } from '@/layouts';

type ToasterTheme = 'dark' | 'light';

const isDark = useDark();

const toasterTheme = computed<ToasterTheme>(() => {
  return isDark.value ? 'dark' : 'light';
});
</script>

<template>
  <AppLayout>
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="['LoginPage', 'RegistrationPage']">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </AppLayout>
  <Toaster :theme="toasterTheme" position="bottom-right" />
</template>
