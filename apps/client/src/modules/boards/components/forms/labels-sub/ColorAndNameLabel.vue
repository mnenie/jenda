<script setup lang="ts">
import { type HTMLAttributes, useTemplateRef } from 'vue'
import { Icon } from '@iconify/vue'
import { watchDebounced } from '@vueuse/core'
import { UiButton, UiColorPicker, UiInput } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const colorModel = defineModel<string>('color', {
  required: true,
})

const nameModel = defineModel<string>('name')

const inputInstance = useTemplateRef<typeof UiInput>('name')

watchDebounced(inputInstance, (value) => {
  value && value.focus()
}, { flush: 'post', debounce: 10 })
</script>

<template>
  <div :class="cn('flex items-center gap-0 w-full border border-neutral-200 dark:border-neutral-700 rounded-md', props.class)">
    <UiColorPicker v-model:color="colorModel" :with-tabs="false">
      <UiButton variant="secondary" class="gap-1.5 h-8 rounded-r-none shadow-none" :class="$attrs.btn">
        <Icon icon="ph:text-aa-bold" class="min-w-4.6 min-h-4.6" :style="{ color: colorModel }" />
      </UiButton>
    </UiColorPicker>
    <UiInput
      ref="name"
      v-model="nameModel"
      :placeholder="$t('board.forms.labels.actions.new_placeholder')"
      class="rounded-l-none border-none focus:ring-0 h-8 shadow-none"
    />
  </div>
</template>
