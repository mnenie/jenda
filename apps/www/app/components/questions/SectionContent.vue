<script setup lang="ts">
import type { QuestionWithAnswerProps } from './QuestionWithAnswer.vue'

const icons = [
  'i-lucide-kanban',
  'i-lucide-crown',
  'i-lucide-user-round',
  'i-lucide-replace',
  'i-lucide-mouse-pointer-click',
  'i-lucide-message-square-text',
  'i-lucide-phone-call',
  'i-lucide-refresh-ccw',
  'i-lucide-briefcase-business',
  'i-lucide-percent',
] as const

const { tm } = useI18n()

const list = computed(() => {
  const arr = tm('questions.arr') as Omit<QuestionWithAnswerProps, 'icon'>[]
  return arr.map((question, idx) => ({
    title: question.title,
    answer: question.answer,
    icon: icons[idx] ?? '',
  }))
})
</script>

<template>
  <CommonHorizontalSectionWrapper
    :badge="{ label: $t('questions.badge'), icon: 'i-lucide-message-circle-question' }"
    :title="$t('questions.title')"
    :description="$t('questions.description')"
    class="px-36"
  >
    <div class="w-full flex flex-col items-start gap-4 mt-2">
      <div class="w-full grid grid-cols-2 gap-10 auto-rows-fr">
        <Motion
          v-for="question, idx in list"
          :key="idx"
          :initial="{ opacity: 0, transform: 'translateY(50px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.1 * idx }"
          :in-view-options="{ once: true }"
        >
          <QuestionsQuestionWithAnswer :question />
        </Motion>
      </div>
    </div>
  </CommonHorizontalSectionWrapper>
</template>
