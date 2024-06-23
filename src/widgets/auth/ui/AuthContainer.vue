<script setup lang="ts">
import { GoogleOauth, PrivacyPolicy } from '@/features/auth';
import { RouteNames } from '@/shared/config/consts';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const info = computed(() => {
  return route.name === RouteNames.login
    ? 'Enter your info below to sign in your account'
    : 'Enter your info below to create your account';
});
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.container_inside">
      <div :class="$style.top_part">
        <img src="/icons/kanban.png" />
        <h3 class="text-xl">Dizzo</h3>
      </div>
      <div :class="$style.form_wrapper">
        <h2 class="heading-2">
          {{ route.name === RouteNames.login ? 'Welcome back' : 'Get started' }}
        </h2>
        <p :class="[$style.info_text, 'text-sm']">
          {{ info }}
        </p>
        <slot />
        <div :class="[$style.line_container, 'text-xs']">
          <div :class="$style.line" />
          <span>Or continue with</span>
          <div :class="$style.line" />
        </div>
        <GoogleOauth />
        <PrivacyPolicy />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  position: relative;
  height: 100%;
  width: 66.6%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;

  .container_inside {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;

    .top_part {
      position: absolute;
      left: 32px;
      top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;

      & img {
        width: 28px;
        height: 28px;
      }

      & h1 {
        font-weight: 500 !important;
      }
    }

    .form_wrapper {
      position: relative;
      display: flex;
      width: 460px;
      flex-direction: column;
      gap: 8px;

      .info_text {
        padding-bottom: 20px;
        color: #72717a;
        margin-top: -6px;
      }

      .line_container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        padding: 18px 0;

        .line {
          width: 100%;
          height: 1px;
          background-color: var(--zinc-200);
        }

        & span {
          padding: 0 8px;
          color: #72717a;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
