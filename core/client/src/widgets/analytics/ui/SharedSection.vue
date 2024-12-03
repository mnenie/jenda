<script setup lang="ts">
import { UiBadge, UiButton } from '@/shared/ui'
</script>

<template>
  <div :class="$style.share">
    <div>
      <UiButton variant="dashed" disabled>
        {{ $t('analytics.share.btn') }}
      </UiButton>
      <UiBadge variant="default" :class="$style.shared_badge">
        dev
      </UiBadge>
    </div>
    <span class="text-sm">- {{ $t('analytics.share.description') }} 😉</span>
  </div>
</template>

<style module lang="scss">
.share {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;

  & > div {
    position: relative;
  }

  .shared_badge {
    padding: 0 4px;
    position: absolute;
    top: -2px;
    right: -8px;
  }
}

:global(html.dark) {
  .share {
    & > span {
      color: var(--zinc-200);
    }
  }
}
</style>
