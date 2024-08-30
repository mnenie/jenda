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
      <!-- TODO: i18n  -->
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>The page you were looking for can't be found</p>
      <UiButton @click="$router.push({ name: RouteNames.boards })">Go to Home</UiButton>
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
      font-size: 160px;
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

:global(html.dark){
  .container{
    .items{
      & h1, & h3{
        color: var(--zinc-200);
      }
      & p{
        color: var(--zinc-300);
      }
    }
  }
}
</style>
