<script setup lang="ts">
import { Navbar } from './parts';
</script>

<template>
  <div :class="$style.sidebar_layout">
    <Navbar />
    <router-view />
  </div>
</template>

<style module lang="scss">
.sidebar_layout {
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  width: 100%;
  height: 100dvh;
}
</style>
