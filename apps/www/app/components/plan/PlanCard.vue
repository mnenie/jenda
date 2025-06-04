<script lang="ts">
export interface PlanCard {
  plan: string
  price: number
  features: string[]
  description: string
  isPopular?: boolean
  prev?: string
}
</script>

<script setup lang="ts">
const props = defineProps<{
  card: PlanCard
}>()

const { locale, rt, t } = useI18n()

const format = computed(() => locale.value === 'en' ? 'en-US' : locale.value === 'ru' ? 'ru-RU' : 'zh-CN')

const currency = computed(() => locale.value === 'en' ? 'USD' : locale.value === 'ru' ? 'RUB' : 'CNY')

const price = computed(() => {
  return props.card.price > 0
    ? `${t('plan.card.from')} ${new Intl.NumberFormat(format.value, { style: 'currency', currency: currency.value, maximumSignificantDigits: 3 })
      .format(props.card.price)}`
    : t('plan.card.free')
})
</script>

<template>
  <UnaCard
    :card="card.isPopular ? 'outline-blue' : 'outline-gray'"
    class="flex-1 shadow-none relative h-full bg-white overflow-hidden"
    :una="{
      cardContent: 'space-y-4 relative z-99',
      cardHeader: 'pb-4',
    }"
  >
    <template #title>
      <div class="flex items-center gap-2 justify-between">
        <p class="text-2xl fw480">
          {{ card.plan }}
        </p>
        <UnaBadge v-if="card.isPopular" badge="soft" :label="t('plan.card.popular')" />
      </div>
    </template>
    <div class="flex flex-col items-start gap-1">
      <span class="text-4xl fw600 text-blue-700">{{ price }}</span>
      <span class="text-muted">{{ t('plan.card.month') }}</span>
    </div>

    <UnaButton :label="t('plan.card.action')" :btn="card.isPopular ? 'soft-blue' : 'soft-accent'" class="w-full" />
    <div class="flex flex-col items-start gap-4">
      <span class="text-neutral-800 mb-2">{{ card.description }}</span>
      <span v-if="card.prev" class="text-neutral-800">{{ t('plan.card.more', { plan: card.prev }) }}</span>
      <ul class="space-y-2">
        <li v-for="feature, index in card.features" :key="index" class="flex items-center gap-2">
          <span i-lucide-check class="min-w-4 min-h-4 text-blue-500" />
          <span class="text-neutral-600">{{ rt(feature) }}</span>
        </li>
      </ul>
    </div>
  </UnaCard>
</template>
