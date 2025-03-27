<script setup lang="ts">
import { UiButton, UiColorPicker, UiInput } from '@/shared/ui'

defineProps<{
  tPrefix: string
  tField: string
}>()

const name = defineModel<string>('name')
const color = defineModel<string>('color', {
  default: '#ffffff',
})
const popoverModel = defineModel<boolean>('popover')
</script>

<template>
  <div class="flex gap-0 items-center w-full border border-neutral-200 dark:border-neutral-700 rounded-md">
    <UiColorPicker v-model:open="popoverModel" v-model:color="color" :with-tabs="false">
      <UiButton variant="secondary" class="rounded-r-none gap-1.5">
        <div class="w-4.6 h-4.6 rounded-md" :style="{ background: color }" />
        <div i-lucide-chevron-down class="transition-all text-neutral-500" :class="popoverModel ? 'rotate-180' : ''" />
      </UiButton>
    </UiColorPicker>
    <UiInput
      id="name"
      v-model="name"
      :placeholder="$t(`${tPrefix}.forms.edit.${tField}.placeholder`)"
      class="rounded-l-none border-none focus:ring-0"
    />
  </div>
</template>
