<script setup lang="ts">
import { Toaster } from 'vue-sonner';
</script>

<template>
  <component :is="$route.meta.layout">
    <router-view v-slot="{ Component }">
      <keep-alive :include="['Login', 'Registration']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </component>
  <Toaster position="bottom-right" closeButton />
</template>
