<script setup lang="ts">
import { UiButton } from '@/shared/ui';
import { Trash2 } from 'lucide-vue-next';
</script>

<template>
  <UiButton :variant="'dashed'" :size="'sm'" :class="$style.trash">
    <Trash2 :size="16" />
  </UiButton>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.trash {
  height: 30px;
  gap: 8px;

  & > svg {
    color: var(--zinc-500);
  }
  @include transition;

  @include on-hover {
    & > svg {
      color: var(--destructive) !important;
    }
  }
}

:global(html.dark) {
  .trash {
    background-color: transparent;
    & > svg {
      color: var(--zinc-300);
    }
    @include on-hover {
      background-color: transparent;
      border-color: var(--zinc-500);
      & > svg {
        color: var(--dark-destructive) !important;
      }
    }
  }
}
</style>
