<script setup lang="ts">
import { redirect } from '@/shared/lib/helpers';
</script>

<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <p class="text-sm">
        <span :class="$style.brand">Jenda</span> - {{ $t('welcome.footer') }}
        <a :class="$style.link" @click.prevent="redirect('https://github.com/mnenie/jenda')"> Github </a>
      </p>
    </div>
  </footer>
</template>

<style module lang="scss">
.footer {
  border-top: 1px solid rgba(228, 228, 231, 0.4);
  padding: 16px 40px;
  background-color: transparent;
  width: 100%;
}

.container {
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  & > p {
    color: var(--zinc-600);
  }

  .brand {
    font-weight: 500;
  }

  .link {
    cursor: pointer;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

:global(html.dark) {
  .footer {
    border-color: rgba(var(--zinc-rgb-600), 0.5);
  }
  .container {
    & > p {
      color: var(--zinc-200);
    }
  }
}

@media screen and (max-width: 1152px) {
  .container {
    max-width: 1064px;
  }
}

@media screen and (max-width: 992px) {
  .footer {
    padding: 16px 20px;
  }
}
</style>
