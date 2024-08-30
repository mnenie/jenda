<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { MainWrapper } from '@/widgets/members';

useHead({
  title: 'Jenda | Members'
});
</script>

<template>
  <div :class="$style.members">
    <div :class="$style.top">
      <h4 class="heading-4">{{ $t('members.title') }} (1)</h4>
      <p class="text-sm">
        {{ $t('members.description') }}
      </p>
    </div>
    <MainWrapper>
      <RouterView />
    </MainWrapper>
  </div>
</template>

<style module lang="scss">
.members {
  height: 100%;
  width: 100%;

  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--zinc-200);

    & > p {
      color: var(--zinc-500);
    }
  }
}

:global(html.dark) {
  .members {
    .top {
      border-color: var(--zinc-600);
      & > p {
        color: var(--zinc-300);
      }
    }
  }
}
</style>
