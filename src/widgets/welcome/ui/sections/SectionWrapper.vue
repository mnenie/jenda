<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { SectionWrapperType } from '../../model';
import { useI18n } from 'vue-i18n';

const props = withDefaults(
  defineProps<{
    section: SectionWrapperType;
    direction?: 'default' | 'reverse';
  }>(),
  {
    direction: 'default'
  }
);

const { locale } = useI18n();

const writerKey = ref(0);

const sectionDirection = computed(() => (props.direction === 'default' ? 'row' : 'row-reverse'));

watch([() => props.section.writer, locale], () => {
  writerKey.value++;
});
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.name">
      <slot name="icon" :size="36" :color="'var(--zinc-600)'" />
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
          <VueWriter :key="writerKey" style="color: var(--zinc-500)" :array="[section.writer]" />
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

    & h4 {
      margin-bottom: 30px;
    }
    & p {
      max-width: 600px;
      margin-bottom: 50px;
    }

    & img {
      width: 500px;
      border-radius: 10px;
    }
  }
}
</style>
