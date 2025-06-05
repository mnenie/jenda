<script lang="ts">
export interface QuestionWithAnswerProps {
  title: string
  answer: string
  icon: string
}
</script>

<script setup lang="ts">
defineProps<{
  question: QuestionWithAnswerProps
}>()

const { rt } = useI18n()
</script>

<template>
  <div class="flex gap-3 items-start">
    <UnaBadge
      badge="soft-gray"
      size="sm"
      class="p-2"
    >
      <div class="min-w-4 min-h-4" :class="question.icon" />
    </UnaBadge>
    <div class="flex flex-col gap-2">
      <p class="fw500 text-lg">
        {{ rt(question.title) }}
      </p>
      <span class="text-muted">{{ rt(question.answer) }}</span>
    </div>
  </div>
</template>
