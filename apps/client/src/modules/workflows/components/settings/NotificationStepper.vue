<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import NotificationApiChooser from './NotificationApiChooser.vue'
import UtilityStepper from './UtilityStepper.vue'
import MessageRequestWrapper from './MessageRequestWrapper.vue'
import type { NChooser } from '../../types'

const action = shallowRef<NChooser['value']>()
const steps = computed(() => action.value && action.value !== 'internal_notifier' ? [1, 2] : [1])
</script>

<template>
  <UtilityStepper :steps>
    <template #step-1>
      <NotificationApiChooser v-model="action" />
    </template>
    <template v-if="action" #step-2>
      <MessageRequestWrapper :action />
    </template>
  </UtilityStepper>
</template>
