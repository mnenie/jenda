<script setup lang="ts">
import { redirect } from '@/shared/lib/helpers';
</script>

<template>
  <p :class="[$style.main_text, 'text-sm']">
    By clicking continue, you agree to our
    <span :class="$style.inside" @click="redirect('https://github.com/mnenie/dizzo')">
      Terms of Service
    </span>
    and
    <span :class="$style.inside" @click="redirect('https://github.com/mnenie/dizzo')"> Privacy Policy. </span>
  </p>
</template>

<style module lang="scss">
.main_text {
  padding: 13px 0px 0px 0px;
  text-align: center;
  color: #72717a;

  .inside {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: 0.1s ease-in;

    &:hover {
      color: var(--zinc-900);
    }
  }
}
</style>
