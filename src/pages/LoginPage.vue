<script setup lang="ts">
import { BgPanel, SignInForm } from '@/features/auth';
</script>

<template>
  <div :class="$style.login">
    <SignInForm />
    <BgPanel />
  </div>
</template>

<style module lang="scss">
.login {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
