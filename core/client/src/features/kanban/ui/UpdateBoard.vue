<script setup lang="ts">
import { UiButton } from '@/shared/ui'
import { useI18n } from 'vue-i18n'

const emits = defineEmits<{
  (e: 'apply'): void
  (e: 'clear'): void
}>()

const { t } = useI18n()
</script>

<template>
  <div :class="$style.btns">
    <UiButton variant="default" :class="$style.apply_btn" @click="emits('apply')">
      {{ t('kanban.configuration.update') }}
    </UiButton>
    <UiButton variant="destructive" @click="emits('clear')">
      {{ t('kanban.configuration.clear') }}
    </UiButton>
  </div>
</template>

<style module lang="scss">
.btns {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
}
</style>
