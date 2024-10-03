<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { UiButton } from '@/shared/ui';
import { RouteNames } from '@/shared/config/consts';

useHead({
  title: '404 | Not Found :/'
});
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.items">
      <h1>404</h1>
      <h3>{{ $t('not_found.title') }}</h3>
      <p>{{ $t('not_found.description') }}</p>
      <UiButton @click="$router.push({ name: RouteNames.welcome })">{{ $t('not_found.btn') }}</UiButton>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  justify-content: center;
  padding-top: 15%;
  height: 100%;

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
      font-size: 180px;
      color: var(--zinc-800);
    }

    & > h3 {
      font-size: 40px;
      color: var(--zinc-800);
      margin-top: -30px;
    }

    & > p {
      margin-top: -2px;
    }

    & button {
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 1560px) {
  .container {
    .items {
      & > h1 {
        font-size: 160px;
      }
    }
  }
}

:global(html.dark) {
  .container {
    .items {
      & h1,
      & h3 {
        color: var(--zinc-200);
      }
      & p {
        color: var(--zinc-300);
      }
    }
  }
}
</style>
