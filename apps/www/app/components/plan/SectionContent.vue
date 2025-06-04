<script setup lang="ts">
import type { PlanCard } from './PlanCard.vue'
import { plans, priceListPerMonth, priceListPerYear, tabs } from '~/constants/plans'

const tab = useLocalStorage('plan-tab', 'month', {
  initOnMounted: true,
})

const { t, locale, tm } = useI18n()

const _tabs = computed(() => tabs.map(tab => ({
  name: t(`plan.tabs.${tab.name}`),
  value: tab.value,
})))

const prices = computed(() => tab.value === 'month' ? priceListPerMonth[locale.value] : priceListPerYear[locale.value])

const planCards = computed<PlanCard[]>(() => plans.map((plan, index) => ({
  ...plan,
  price: prices.value![index] ?? 0,
  description: t(`plan.descriptions.${plan.description}`),
  features: tm(`plan.features.${plan.description}`) as string[],
})))
</script>

<template>
  <div class="bg-neutral-100 py-24 px-36 mb-28">
    <CommonHorizontalSectionWrapper
      :badge="{ label: $t('plan.badge'), icon: 'i-lucide-tag' }"
      :title="$t('plan.title')"
      :description="$t('plan.description')"
      class="!my-0"
    >
      <UnaTabs
        v-model="tab"
        :items="_tabs"
        class="mb-4 !w-fit self-start"
        :una="{
          tabsRoot: '!w-fit',
        }"
      >
        <template #trigger="{ item }">
          {{ item.name }}
          <UnaBadge v-if="item.value === 'year'" class="ml-2">
            -20%
          </UnaBadge>
        </template>
      </UnaTabs>
      <div class="w-full grid grid-cols-4 gap-4 auto-rows-fr">
        <Motion
          v-for="card, index in planCards"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <PlanCard :card="{ ...card, prev: planCards[index - 1]?.plan }" />
        </Motion>
      </div>
    </CommonHorizontalSectionWrapper>
  </div>
</template>
