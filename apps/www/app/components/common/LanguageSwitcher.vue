<script setup lang="ts">
const lang = shallowRef<string>('')
const { locale, locales, setLocale } = useI18n()

const availibleLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
</script>

<template>
  <UnaSelect
    v-model:model-value="lang"
    :items="availibleLocales"
    :_select-content="{
      class: 'w-fit min-w-2',
    }"
    @update:model-value="setLocale($event.code)"
  >
    <template #trigger-wrapper>
      <UnaSelectTrigger
        rounded="lg"
        select="ghost-gray"
        class=" absolute right--18 focus:ring-0 outline-none w-fit text-neutral-500 gap-1 hover:(text-neutral-700 bg-neutral-100/60)"
        leading="i-lucide-globe"
        :una="{
          selectTriggerTrailing: 'hidden',
        }"
      >
        {{ locale.toUpperCase() }}
      </UnaSelectTrigger>
    </template>
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </UnaSelect>
</template>

<style lang="scss" scoped>

</style>
