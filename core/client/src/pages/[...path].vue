<script setup lang="ts">
import { LayoutsEnum } from '@/layouts/model'
import { UiButton } from '@/shared/ui'
import { useHead } from '@unhead/vue'
import { useWindowSize } from '@vueuse/core'

definePage({
  meta: {
    layout: LayoutsEnum.empty,
    requiresAuth: false,
  },
  name: 'not-found',
})

useHead({
  title: '404 | Not Found :/',
})

const { width } = useWindowSize()
</script>

<template>
  <div class="flex justify-center items-center h-dvh">
    <div
      class="flex flex-col justify-center mt--20 items-center h-full
      max-[520px]:mt--10"
    >
      <h1
        class="text-9rem text-neutral-800 dark:text-neutral-200
        max-[768px]:text-8rem max-[520px]:!text-5rem"
      >
        404
      </h1>
      <h3
        class="text-4xl text-neutral-800 mt--28px dark:text-neutral-200
        max-[768px]:mt--20px max-[520px]:!text-3xl mb-20px"
      >
        {{ $t('not_found.title') }}
      </h3>
      <p
        v-if="width > 520"
        class="mb-20px mt-2px dark:text-neutral-300 max-[520px]:(mt-10px text-neutral-700)"
      >
        {{ $t('not_found.description') }}
      </p>
      <UiButton @click="$router.push('/')">
        {{ $t('not_found.btn') }}
      </UiButton>
    </div>
  </div>
</template>
