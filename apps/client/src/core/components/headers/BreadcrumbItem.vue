<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router/auto'
import type { Breadcrumb } from '@/shared/composables/breadcrumbs'

const props = defineProps<{
  breadcrumb: Breadcrumb
}>()

const route = useRoute()

const linkClasses = computed(() =>
  route.name !== props.breadcrumb.name
    ? 'text-neutral-500 !fw400 dark:!text-neutral-500'
    : 'dark:text-neutral-100',
)

const iconClasses = computed(() =>
  route.name !== props.breadcrumb.name
    ? 'dark:text-neutral-500'
    : 'dark:text-neutral-200',
)
</script>

<template>
  <RouterLink
    :to="breadcrumb.to"
    class="inline-flex items-center gap-2"
    :class="linkClasses"
  >
    <slot name="route" :breadcrumb="breadcrumb">
      <Icon
        v-if="breadcrumb.icon"
        :icon="breadcrumb.icon"
        class="text-18px"
        :class="iconClasses"
      />
      <p
        v-if="breadcrumb.tKey"
        class="text-large fw500 mt-1.5px"
        :class="linkClasses"
      >
        {{ $t(`sidebar.${breadcrumb.tKey}`) }}
      </p>
      <p
        v-else
        class="text-large mt-1.5px"
        :class="linkClasses"
      >
        {{ breadcrumb.value }}
      </p>
    </slot>
  </RouterLink>
</template>
