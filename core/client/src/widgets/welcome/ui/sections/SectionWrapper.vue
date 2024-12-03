<script setup lang="ts">
import type { SectionWrapperType } from '../../model'
import { useDark, useWindowSize } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = withDefaults(
  defineProps<{
    section: SectionWrapperType
    direction?: 'default' | 'reverse'
    id: string
  }>(),
  {
    direction: 'default',
  },
)

const { locale } = useI18n()
const isDark = useDark()

const { width } = useWindowSize()

const writerKey = ref(0)

const sectionDirection = computed(() =>
  width.value >= 1100 ? (props.direction === 'default' ? 'row' : 'row-reverse') : 'column',
)
const iconColor = computed(() => (isDark.value ? 'var(--zinc-400)' : 'var(--zinc-600)'))
const iconSize = computed(() => (width.value >= 1100 ? 36 : 30))

watch([() => props.section.writer, locale], () => {
  writerKey.value++
})
</script>

<template>
  <div :id :class="$style.wrapper">
    <div :class="$style.name">
      <div v-show="width > 520">
        <slot name="icon" :size="iconSize" :color="iconColor" />
      </div>
      <h2 class="heading-2">
        {{ section.name }}
      </h2>
    </div>
    <section :style="{ flexDirection: sectionDirection }">
      <slot name="content">
        <div>
          <h4 class="heading-4">
            {{ section.heading }}
          </h4>
          <p class="text-base">
            {{ section.about }}
          </p>
          <VueWriter :key="writerKey" :array="[section.writer]" class="text-sm" :class="[$style.writer]" />
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
    align-items: center;
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

@media screen and (max-width: 1220px) {
  .wrapper {
    .name {
      & > h2 {
        font-size: 38px;
      }
    }
    & > section {
      & div {
        min-width: 390px;
      }
      & img {
        max-width: 500px;
      }
    }
  }
}

@media screen and (max-width: 1152px) {
  .wrapper {
    .name {
      & > h2 {
        font-size: 34px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .wrapper {
    .name {
      & > h2 {
        font-size: 32px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    gap: 25px;
    .name {
      justify-content: center;
    }
    & > section {
      gap: 30px;
      & h4 {
        text-align: center;
        margin-bottom: 20px;
      }
      & p {
        text-align: center;
        margin-bottom: 20px;
      }
      .writer {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 520px) {
  .wrapper {
    .name {
      & h2 {
        text-align: center;
        font-size: 28px;
      }
    }
    & > section {
      padding: 0;

      & div {
        min-width: unset;
      }
    }
  }
}
</style>
