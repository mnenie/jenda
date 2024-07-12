<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { BgPanel, SignUpForm } from '@/features/auth';
import { AuthContainer } from '@/widgets/auth';

useHead({
  title: 'Jenda | Registration'
});
</script>

<template>
  <div :class="$style.regitration">
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
    <BgPanel />
  </div>
</template>

<style module lang="scss">
.regitration {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
