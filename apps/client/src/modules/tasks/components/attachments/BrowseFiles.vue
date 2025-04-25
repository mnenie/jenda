<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { Icon } from '@iconify/vue'
import { cn } from '@/shared/libs/shadcn/utils'

defineProps<{
  isOverDropZone?: boolean
  length?: boolean
}>()

const emit = defineEmits<{
  (e: 'browseFiles'): void
}>()

const dropZone = useTemplateRef<HTMLElement>('dropZone')

defineExpose({
  zone: dropZone,
})
</script>

<template>
  <div
    ref="dropZone"
    :class="cn(
      'absolute inset-0 flex flex-col items-center gap-1 mx-auto mb-2 rounded-md',
      { [length ? 'z-10 bg-neutral-50/70 dark:bg-neutral-800/70' : 'bg-neutral-50 dark:bg-neutral-800']: isOverDropZone },
      [length ? 'justify-end py-2' : 'py-6  justify-center'],
    )"
  >
    <Icon
      v-if="!length"
      icon="hugeicons:cloud-upload"
      class="w-8 h-8 text-neutral-400 dark:text-neutral-600 mb-2"
      :class="{ '!text-blue-300': isOverDropZone }"
    />
    <p
      class="text-default text-neutral-400 text-center"
      :class="cn({ '!opacity-80': isOverDropZone }, [length ? 'max-w-full' : 'max-w-300px'])"
    >
      {{ $t('task.attachments.empty.description', 1) }}
      <span role="button" class="hover:border-b text-#266df0 border-blue-500" @click="emit('browseFiles')">
        {{ $t('task.attachments.empty.description', 2) }}
      </span>
      (max .2MB)
    </p>
  </div>
</template>
