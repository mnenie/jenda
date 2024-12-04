<script setup lang="ts">
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton variant="dashed" size="sm" :class="$style.trash">
    <span
      i-hugeicons-delete-03
      text-base
    />
  </UiButton>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.trash {
  height: 30px;
  gap: 8px;

  & > span {
    color: var(--zinc-500);
  }
  @include transition;

  @include on-hover {
    & > span {
      color: var(--destructive) !important;
    }
  }
}

:global(html.dark) {
  .trash {
    background-color: transparent;
    & > span {
      color: var(--zinc-300);
    }
    @include on-hover {
      background-color: transparent;
      border-color: var(--zinc-500);
      & > span {
        color: var(--dark-destructive) !important;
      }
    }
  }
}
</style>
