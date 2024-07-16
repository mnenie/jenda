<script setup lang="ts">
import { ThemeSwitcher } from '@/features/settings/theme-switcher';
import { LanguageSwitcher } from '@/features/settings/lang-switcher';
</script>

<template>
  <div :class="$style.lang">
    <p class="text-sm" style="font-weight: 500">Language</p>
    <LanguageSwitcher />
    <span class="text-xs"> This is the language that will be used in the dashboard. </span>
  </div>
  <div :class="$style.theme">
    <div :class="$style.text">
      <p class="text-sm" style="font-weight: 500">Theme</p>
      <span class="text-xs">Select the theme for the dashboard.</span>
    </div>
    <ThemeSwitcher />
  </div>
</template>

<style module lang="scss">
.lang {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 40px;
  align-items: flex-start;

  & > p {
    color: var(--zinc-950);
  }

  & > span {
    color: var(--zinc-500);
  }
}

.theme {
  .text {
    margin-bottom: 12px;

    & p {
      color: var(--zinc-950);
    }

    & span {
      color: var(--zinc-500);
    }
  }
}

:global(html.dark) {
  .lang {
    & > p {
      color: var(--zinc-200);
    }
    & > span {
      color: var(--zinc-300);
    }
  }
  .theme {
    .text {
      & p {
        color: var(--zinc-200);
      }
      & span {
        color: var(--zinc-300);
      }
    }
  }
}
</style>
