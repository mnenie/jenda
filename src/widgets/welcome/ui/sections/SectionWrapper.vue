<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDark } from '@vueuse/core';
import type { SectionWrapperType } from '../../model';

const props = withDefaults(
  defineProps<{
    section: SectionWrapperType;
    direction?: 'default' | 'reverse';
    id: string;
  }>(),
  {
    direction: 'default'
  }
);

const { locale } = useI18n();
const isDark = useDark();

const writerKey = ref(0);

const sectionDirection = computed(() => (props.direction === 'default' ? 'row' : 'row-reverse'));
const iconColor = computed(() => (isDark.value ? 'var(--zinc-400)' : 'var(--zinc-600)'));

watch([() => props.section.writer, locale], () => {
  writerKey.value++;
});
</script>

<template>
  <div :id :class="$style.wrapper">
    <div :class="$style.name">
      <slot name="icon" :size="36" :color="iconColor" />
      <h2 class="heading-2">
        {{ section.name }}
      </h2>
    </div>
    <section :style="{ flexDirection: sectionDirection }">
      <slot name="content">
        <div>
          <h4 class="heading-4">{{ section.heading }}</h4>
          <p class="text-base">
            {{ section.about }}
          </p>
          <VueWriter :key="writerKey" :array="[section.writer]" :class="$style.writer" />
        </div>
        <img :src="section.img" loading="lazy" decoding="async" />
      </slot>
    </section>
  </div>
</template>

<style module lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;

  .name {
    display: flex;
    gap: 20px;

    & > h2 {
      font-size: 40px;
    }
  }

  & > section {
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
    gap: 46px;

    & h4 {
      margin-bottom: 30px;
    }
    & p {
      max-width: 696px;
      margin-bottom: 50px;
    }

    & img {
      max-width: 600px;
      width: 100%;
      border-radius: 10px;
    }

    .writer {
      color: var(--zinc-500);
    }
  }
}

:global(html.dark) {
  .wrapper {
    .name {
      & > h2 {
        color: var(--zinc-100);
      }
    }
    & > section {
      & h4 {
        color: var(--zinc-200);
      }
      & p {
        color: var(--zinc-300);
      }
      .writer {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
