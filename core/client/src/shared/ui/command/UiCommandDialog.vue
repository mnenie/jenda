<script setup lang="ts" generic="T extends string">
import { useForwardPropsEmits } from 'radix-vue'
import { reactiveOmit } from '@vueuse/core'
import UiCommand from './UiCommand.vue'
import type { HTMLAttributes } from 'vue'
import type { DialogRootEmits, DialogRootProps } from 'radix-vue'
import { UiDialog, UiDialogContent } from '@/shared/ui/dialog'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<DialogRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogRootEmits>()

const model = defineModel<T>('search')

const rootOmitProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(rootOmitProps, emits)
</script>

<template>
  <UiDialog v-bind="forwarded">
    <UiDialogContent :class="cn('command-dialog', props.class)">
      <UiCommand v-model:search-term="model" class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-neutral-400">
        <slot />
      </UiCommand>
    </UiDialogContent>
  </UiDialog>
</template>
