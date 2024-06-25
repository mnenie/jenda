<script setup lang="ts">
import { BgPanel, SignUpForm } from '@/features/auth';
import { AuthContainer } from '@/widgets/auth';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Dizzo | Registration'
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
