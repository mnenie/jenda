<script setup lang="ts">
import { BgPanel, SignInForm } from '@/features/auth';
import { AuthContainer } from '@/widgets/auth';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Jenda | Login'
});
</script>

<template>
  <div :class="$style.login">
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
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
