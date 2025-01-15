<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { UiButton, UiInput } from '@/shared/ui'

const source = 'https://jenda/link/12103032'

const { copy, copied } = useClipboard({ source })

function copyLink() {
  if (copied.value)
    return
  copy(source)
  toast.success(`Successfully copied ${source} to clipboard`)
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <div class="grid flex-1 gap-2">
      <UiInput
        :default-value="source"
        readonly
        class="select-none pointer-events-none focus:ring-0"
      />
    </div>
    <UiButton variant="solid" type="submit" size="sm" :disabled="copied" class="px-3" @click="copyLink">
      <div v-if="!copied" i-hugeicons-copy-02 class="w-4 h-4 text-neutral-100" />
      <div v-else i-hugeicons-checkmark-circle-03 class="w-4 h-4 text-neutral-100" />
    </UiButton>
  </div>
</template>
