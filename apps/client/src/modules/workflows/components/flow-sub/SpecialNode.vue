<script setup lang="ts">
import { computed } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import type { NodeProps } from '@vue-flow/core'

const props = defineProps<NodeProps>()

const x = computed(() => `${Math.round(props.position.x)}px`)
const y = computed(() => `${Math.round(props.position.y)}px`)
</script>

<template>
  <div class="vue-flow__node-default">
    {{ data }}
    <div>{{ data.title }}</div>
    test
    <div>
      {{ x }} {{ y }}
    </div>

    <Handle type="source" :position="Position.Bottom" />
    <Handle type="target" :position="Position.Top" />
  </div>
</template>
