<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { useSelectedNodeContext } from '../../composables/settings'
import TriggerOrActionChooser from './TriggerOrActionChooser.vue'
import UtilityStepper from './UtilityStepper.vue'
import TriggerOrActionInputs from './TriggerOrActionInputs.vue'
import type { Chooser, TAChooser } from '../../types'

const { selectedNode: node } = useSelectedNodeContext()

const board = shallowRef<Chooser['value']>()

const action = shallowRef<TAChooser['value']>()
const steps = computed(() => action.value && !/user|you/.test(action.value) ? [1, 2] : [1])
</script>

<template>
  <UtilityStepper :steps>
    <template #step-1>
      <TriggerOrActionChooser v-model="action" :node />
    </template>
    <template v-if="action" #step-2>
      <TriggerOrActionInputs v-model="board" :action :node />
    </template>
  </UtilityStepper>
</template>
