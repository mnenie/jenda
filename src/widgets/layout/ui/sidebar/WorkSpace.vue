<script setup lang="ts">
import { UiButton } from '@/shared/ui';
import type { Link } from '../../types';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouteNames } from '@/shared/config/consts';

const props = defineProps<{
  links: Link[];
}>();

const route = useRoute();

const isCurrentPath = (link: Link) => {
  if (
    route.name === RouteNames.members ||
    route.name === RouteNames.members + '.guests' ||
    route.name === RouteNames.members + '.all'
  ) {
    return link.pathName === RouteNames.members;
  }
  return link.pathName === route.name;
};

const pathName = computed(() => {
  return props.links.map((link) => ({
    ...link,
    isActive: isCurrentPath(link)
  }));
});
</script>

<template>
  <p :class="[$style.name_block, 'text-sm']">workspace</p>
  <div :class="$style.sidebar_main_links">
    <RouterLink v-for="link in pathName" :key="link.id" :to="{ name: link.pathName }" :class="$style.link">
      <UiButton :variant="link.isActive ? 'secondary' : 'ghost'" :class="$style.link_btn">
        <component :is="link.icon" :size="18" :color="'rgb(39 39 42)'" />
        <span class="text-sm">{{ link.title }}</span>
      </UiButton>
    </RouterLink>
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

    .link_btn{
      width: 100%;
      justify-content: flex-start;
      gap: 6px;
      box-shadow: none;
    }

    & span {
      font-weight: 500 !important;
      color: var(--zinc-900);
    }
  }
}
</style>
