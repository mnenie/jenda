<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { redirect } from '@/shared/lib/helpers';
import { computed } from 'vue';

const { tm, locale } = useI18n();

// @ts-expect-error tm types
const privacyItems = tm('authentication.privacy');

const maxWidth = computed(() => {
  return locale.value === 'ru-RU' ? '400px' : '320px';
});
</script>

<template>
  <p :class="[$style.main_text, 'text-sm']">
    {{ privacyItems[0] }}
    <span :class="$style.inside" @click="redirect('https://github.com/mnenie/dizzo')">
      {{ privacyItems[1] }}
    </span>
    {{ privacyItems[2] }}
    <span :class="$style.inside" @click="redirect('https://github.com/mnenie/dizzo')">
      {{ privacyItems[3] }}
    </span>
  </p>
</template>

<style module lang="scss">
.main_text {
  padding: 10px 0px 0px 0px;
  text-align: center;
  color: #72717a;
  max-width: v-bind('maxWidth');
  margin: 0 auto;

  .inside {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: 0.1s ease-in;

    &:hover {
      color: var(--zinc-900);
    }
  }
}

:global(html.dark) {
  .main_text {
    color: var(--zinc-300);

    .inside {
      &:hover {
        color: var(--zinc-400);
      }
    }
  }
}
</style>
