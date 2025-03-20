<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { UiTabs, UiTabsList, UiTabsTrigger } from '@/shared/ui'

const tabsValue = defineModel<string>('tabs')

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ plural, icon, value }">
    <UiTabsTrigger :value class="flex-1 h-8">
      <div class="flex items-center gap-1">
        <Icon :icon class="w-4 h-4" />
        {{ $t('board.forms.edit.visibility.tabs', plural) }}
      </div>
    </UiTabsTrigger>
  </DefineTemplate>
  <UiTabs v-model="tabsValue" class="w-full" default-value="shared">
    <UiTabsList class="w-full h-unset p-0.8 dark:(border-none bg-neutral-700/20)">
      <ReuseTemplate value="private" :plural="1" icon="hugeicons:square-lock-02" />
      <ReuseTemplate value="shared" :plural="2" icon="hugeicons:user-group" />
    </UiTabsList>
  </UiTabs>
</template>
