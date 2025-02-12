<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { createReusableTemplate, useLocalStorage } from '@vueuse/core'
import { UiTabs, UiTabsList, UiTabsTrigger } from '@/shared/ui'

const tabModel = useLocalStorage<string | number>('tabs', 'dots')

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ icon, value }">
    <UiTabsTrigger :value class="py-1 px-1.5">
      <Icon :icon class="text-neutral-800 dark:text-neutral-300 w-4 h-4" />
    </UiTabsTrigger>
  </DefineTemplate>
  <UiTabs v-model="tabModel" default-value="dots">
    <UiTabsList>
      <ReuseTemplate value="dots" icon="ph:dots-nine-bold" />
      <ReuseTemplate value="lines" icon="mdi-light:grid" />
    </UiTabsList>
  </UiTabs>
</template>
