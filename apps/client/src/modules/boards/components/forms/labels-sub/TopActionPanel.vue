<script setup lang="ts">
import { shallowRef } from 'vue'
import NewLabel from './NewLabel.vue'
import { UiButton, UiInput } from '@/shared/ui'

const newLabel = shallowRef(false)

const search = defineModel<string>({
  required: true,
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2 w-full">
      <UiInput v-model="search" variant="filled" leading="lucide:search" :placeholder="$t('board.forms.labels.actions.search')" root="w-fit" />
      <UiButton variant="secondary" class="w-fit" @click="newLabel = !newLabel">
        {{ $t('board.forms.labels.actions.add') }}
        <div i-lucide-chevron-down class="w-4 h-4 transition-all" :class="{ 'rotate-180': newLabel }" />
      </UiButton>
    </div>
    <NewLabel v-if="newLabel" @cancel="newLabel = false" />
  </div>
</template>
