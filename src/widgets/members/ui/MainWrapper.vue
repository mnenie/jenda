<script setup lang="ts">
import { UiButton } from '@/shared/ui';
import { reactive } from 'vue';
import { RouteNames } from '@/shared/config/consts';
import { LeaveButton } from '@/features/members/leave-team';

const links = reactive([
  { id: '0', title: 'All participants', pathName: RouteNames.members + '.all' },
  { id: '1', title: 'Guests', pathName: RouteNames.members + '.guests' }
]);
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.links">
      <RouterLink v-for="link in links" :key="link.id" :to="{ name: link.pathName }" style="width: 100%">
        <UiButton
          :variant="$route.name === link.pathName ? 'outline' : 'ghost'"
          :class="{ [$style.ghost_exception]: $route.name !== link.pathName }"
        >
          <span class="text-sm">{{ link.title }}</span>
        </UiButton>
      </RouterLink>
    </div>
    <div>
      <slot />
      <div :class="$style.btns_section">
        <LeaveButton />
        <UiButton :variant="'outline'" @click="$router.push({ name: RouteNames.boards })">
          View the boards (3)
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  align-items: flex-start;
  gap: 30px;

  .links {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
    width: 180px;

    & button {
      width: 100%;
      justify-content: flex-start;
    }
    .ghost_exception {
      border: 1px solid transparent !important;
    }
  }

  .btns_section {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }
}
</style>
