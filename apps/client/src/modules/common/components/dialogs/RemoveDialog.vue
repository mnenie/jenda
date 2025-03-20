<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  UiButton,
  UiDialog,
  UiDialogClose,
  UiDialogContent,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

const props = defineProps<{
  tPrefix: string
  deleting?: boolean
}>()

const emits = defineEmits<{
  (e: 'remove'): void
}>()

const model = defineModel<boolean>('open')

const { t } = useI18n()

const removeBthText = computed(() => {
  return props.deleting ? t('common.remove.btns', 2) : t('common.remove.btns', 1)
})

function onRemove() {
  if (props.deleting)
    return
  emits('remove')
}
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogTrigger as-child>
      <slot name="trigger" />
    </UiDialogTrigger>
    <UiDialogContent class="gap-2">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t(`${tPrefix}.remove.title`) }}</UiDialogTitle>
      </UiDialogHeader>
      <div class="flex flex-col gap-6">
        <p class="text-neutral-800 dark:text-neutral-300 text-default">
          {{ $t(`${tPrefix}.remove.description`) }}
          <span class="fw500 text-red-400">{{ $t(`common.remove.warning`) }}</span>
        </p>
        <div class="flex gap-2 justify-end">
          <UiDialogClose as-child>
            <UiButton variant="secondary">
              {{ $t('common.remove.btns', 0) }}
            </UiButton>
          </UiDialogClose>
          <UiButton :loading="deleting" variant="destructive" @click="onRemove">
            {{ removeBthText }}
          </UiButton>
        </div>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
