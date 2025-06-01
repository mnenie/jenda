<script setup lang="ts">
const lang = shallowRef<string>('')
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
const isVisible = ref(true)

let timer: number
function handleScroll() {
  cancelAnimationFrame(timer)
  timer = requestAnimationFrame(() => {
    isVisible.value = window.scrollY < 50
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onBeforeUnmount(() => {
  cancelAnimationFrame(timer)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <UnaSelect
    v-model:model-value="lang"
    :items="availableLocales"
    :_select-content="{ class: 'w-fit min-w-2' }"
    @update:model-value="setLocale($event.code)"
  >
    <template #trigger-wrapper>
      <UnaSelectTrigger
        rounded="lg"
        select="ghost-gray"
        class="transition-all duration-300 ease-in-out focus:ring-0 outline-none w-fit text-neutral-500 gap-1 hover:(text-neutral-700 bg-neutral-100/60)"
        :class="{ 'opacity-0 pointer-events-none': !isVisible }"
        leading="i-lucide-globe"
        :una="{ selectTriggerTrailing: 'hidden' }"
      >
        {{ locale.toUpperCase() }}
      </UnaSelectTrigger>
    </template>
    <template #item="{ item }">
      {{ item.name }}
    </template>
  </UnaSelect>
</template>
