<script setup lang="ts">
import { useDark, useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { width } = useWindowSize()

const isDark = useDark()
</script>

<template>
  <div
    v-if="width > 1100"
    class="absolute top-24px left-32px flex items-center gap-1.5 cursor-pointer"
    @click="$router.push('/')"
  >
    <img
      :src="isDark ? '/icons/kanban-dark.png' : '/icons/kanban.png'"
      class="w-7 h-7"
    />
    <h3 class="text-xl !fw-500">
      Jenda
    </h3>
  </div>
  <div
    v-else
    class="absolute left-150px top-30px flex items-center gap-1.5 cursor-pointer max-w-700px
        max-[890px]:left-80px max-[580px]:!left-20px max-[520px]:(!left-15px !top-15px)"
  >
    <div
      class="flex items-center gap-1"
      @click="$router.push('/')"
    >
      <div
        i-lucide-chevron-left
        class="text-lg text-neutral-500"
      />
      <span class="text-sm !fw-500">
        {{ t('authentication.back') }}
      </span>
    </div>
  </div>
</template>
