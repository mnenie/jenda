<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { Chooser } from '../../types'

export type ForType<T, K> = T extends infer U ? U : K
export type MappedT<A, K extends string> = Record<K, A[]>
export type EntityInfer<T = any> = T extends infer U ? U : any
</script>

<script setup lang="ts" generic="U extends EntityInfer, T extends Chooser, K extends keyof T">
/* eslint-disable import/order */
import { createReusableTemplate } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { UiCombobox, UiComboboxAnchor, UiComboboxGroup, UiComboboxInput, UiComboboxItem, UiComboboxItemIndicator, UiComboboxList, UiComboboxTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  items: MappedT<T, string> | T[] | U[]
  forType?: ForType<'actions' | 'settings', K>
  class?: HTMLAttributes['class']
}>()

const value = defineModel<T | undefined>({
  required: true,
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ item, $slots }">
    <UiComboboxGroup class="p-0">
      <UiComboboxItem
        :key="item.value"
        :value="item.value"
        class="w-full flex items-center justify-between cursor-pointer"
      >
        <component :is="$slots.default" />
        <UiComboboxItemIndicator>
          <div i-lucide-check class="ml-auto h-4 w-4" />
        </UiComboboxItemIndicator>
      </UiComboboxItem>
    </UiComboboxGroup>
  </DefineTemplate>
  <UiCombobox v-slot="{ open }" v-model="value" by="value" class="w-full">
    <UiComboboxAnchor as-child>
      <UiComboboxTrigger as-child>
        <slot :open />
      </UiComboboxTrigger>
    </UiComboboxAnchor>
    <UiComboboxList
      v-bind="$attrs"
      class="w-full shadow-none"
    >
      <div v-if="forType === 'settings'" class="relative w-full max-w-sm items-center">
        <UiComboboxInput
          class="input pl-9 focus-visible:ring-0 border-0 border-b rounded-none h-10 shadow-none"
          :placeholder="$t('workflow.node.settings.combobox.placeholder')"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
          <div i-lucide-search class="size-4" />
        </span>
      </div>
      <div v-if="!Array.isArray(items)" :class="cn('overflow-y-auto scrollbar', props.class)">
        <div v-for="group, section in items" :key="section" class="flex flex-col py-2 w-full scrollbar">
          <span class="text-neutral-500 dark:text-neutral-400 text-small w-full px-1.5 pb-1">{{ $t(`workflow.node.settings.sections.${section}`) }}</span>
          <slot name="group" :group="group">
            <ReuseTemplate v-for="item, idx in group as T[]" :key="idx" :item>
              <slot name="item" :item="item">
                <div class="flex items-center gap-2.5">
                  <div class="flex items-center justify-center p-1.5 rounded-md bg-neutral-50 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
                    <Icon :icon="item.sign as string" class="w-4 h-4" />
                  </div>
                  <span class="text-default">{{ $t(`workflow.node.settings.panel_actions.${item.value}`) }}</span>
                </div>
              </slot>
            </ReuseTemplate>
          </slot>
        </div>
      </div>
      <template v-else>
        <ReuseTemplate v-for="item in items as U[]" :key="(item as any)._id" :item>
          <slot name="item" :item="item" />
        </ReuseTemplate>
      </template>
    </UiComboboxList>
  </UiCombobox>
</template>

<style scoped>
@import '@/styles/_scrollbar.css';
</style>
