<script setup lang="ts">
import { shallowRef, toValue } from 'vue'
import { useFileSystemAccess, useObjectUrl } from '@vueuse/core'
import { provideWorkspaceChooserContext } from '../../composables/auth-workspace'
import HandleLogo from './HandleLogo.vue'

const url = shallowRef()

// TODO: add fileSize validation
const { file, open } = useFileSystemAccess({
  dataType: 'Blob',
  types: [
    {
      description: 'Image',
      accept: {
        'image/*': ['.png', '.jpeg'],
      },
    },
  ],
  excludeAcceptAllOption: true,
},
)
function reset() {
  file.value = undefined
  url.value = null
}

async function openFileChooser() {
  await open()
  url.value = toValue(useObjectUrl(file))
}

provideWorkspaceChooserContext({
  openFileChooser,
  reset,
})
</script>

<template>
  <div class="flex items-center justify-start gap-6">
    <img
      :src="url ?? 'https://avatars.githubusercontent.com/u/148716815?v=4'"
      class="h-16 w-16 rounded-md"
    />
    <div class="flex flex-col gap-2">
      <span class="text-sm text-neutral-500 dark:text-neutral-400">
        {{ $t('authentication.workspace.creating.logo.label') }}
      </span>
      <HandleLogo />
      <span class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
        {{ $t('authentication.workspace.creating.logo.description') }}
      </span>
    </div>
  </div>
</template>
