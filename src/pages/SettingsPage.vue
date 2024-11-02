<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { SettingsElements } from '@/widgets/settings';

useHead({
  title: 'Jenda | Settings'
});
</script>

<template>
  <div :class="$style.settings">
    <div>
      <h4 class="heading-4">{{ $t('settings.title') }}</h4>
      <p class="text-sm">{{ $t('settings.description') }}</p>
    </div>
  </div>
  <SettingsElements />
</template>

<style module lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  // border-bottom: 1px solid var(--zinc-200);

  & > div {
    & > p {
      color: var(--zinc-500);
    }
  }
}

:global(html.dark) {
  .settings {
    border-color: var(--zinc-600);
    & > p {
      color: var(--zinc-300);
    }
  }
}
</style>
