<script setup lang="ts">
import { UiButton } from '@/shared/ui';
import type { Link } from '../../types';

defineProps<{
  links: Link[];
}>();
</script>

<template>
  <p :class="[$style.name_block, 'text-sm']">workspace</p>
  <div :class="$style.sidebar_main_links">
    <UiButton
      v-for="link in links"
      :key="link.id"
      :variant="$route.name === link.pathName ? 'secondary' : 'ghost'"
    >
      <RouterLink :to="{ name: 'boards' }" :class="$style.link">
        <component :is="link.icon" :size="18" :color="'rgb(39 39 42)'" />
        <span class="text-sm">{{ link.title }}</span>
      </RouterLink>
    </UiButton>
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.name_block {
  color: var(--zinc-300);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.sidebar_main_links {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  margin-bottom: 30px;

  .link {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    color: var(--zinc-900);
    justify-content: flex-start;
    width: 100%;

    & span {
      font-weight: 500 !important;
      color: var(--zinc-900);
    }
  }
}
</style>
