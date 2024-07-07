<script setup lang="ts">
import { Toaster } from 'vue-sonner';
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="['Login', 'Registration']">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </component>
  <Toaster position="bottom-right" closeButton />
</template>
