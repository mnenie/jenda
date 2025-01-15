<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import BoardsChart from '../components/charts/BoardsChart.vue'
import OnlineChart from '../components/charts/OnlineChart.vue'
import SharedSection from '../components/SharedSection.vue'
import TasksChart from '../components/charts/TasksChart.vue'
import UsersChart from '../components/charts/UsersChart.vue'
import { UiBadge } from '@/shared/ui'
import { useBreakpoints } from '@/shared/composables/breakpoints'

const { breakpoints } = useBreakpoints()

const containerWith = computed(() => {
  if (breakpoints.greaterOrEqual('intermediateDesktop').value)
    return '600px'
  if (breakpoints.between('intermediateLaptop', 'intermediateDesktop').value)
    return '500px'
  if (breakpoints.between('laptop', 'intermediateLaptop').value)
    return '400px'
  return undefined
})

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'analytics',
})

useHead({
  title: 'Jenda | Analytics',
})
</script>

<template>
  <div class="flex flex-col pb-5">
    <div class="flex flex-col items-start mb-3">
      <p class="text-sm text-neutral-600 dark:text-neutral-200">
        {{ $t('analytics.description') }}
      </p>
    </div>
    <div class="inline-flex items-center gap-2 mb-30px">
      <UiBadge
        v-for="(badge, _) in $tm('analytics.badges')"
        :key="_"
        variant="outline"
      >
        {{ badge }}
      </UiBadge>
    </div>
    <div class="flex gap-5 pr-2.5">
      <div
        class="flex flex-col grow gap-5"
        :style="{ maxWidth: containerWith }"
      >
        <TasksChart />
        <UsersChart />
      </div>
      <div class="flex flex-col grow gap-5">
        <OnlineChart />
        <BoardsChart />
      </div>
    </div>
    <SharedSection />
  </div>
</template>
