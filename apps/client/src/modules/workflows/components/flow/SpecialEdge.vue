<script setup lang="ts">
import { computed } from 'vue'
import { BaseEdge, EdgeLabelRenderer, type EdgeProps, getBezierPath } from '@vue-flow/core'

const props = defineProps<EdgeProps>()

const path = computed(() => getBezierPath(props))
</script>

<template>
  <BaseEdge :path="path[0]" />

  <EdgeLabelRenderer>
    <div
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
      class="nodrag nopan"
    >
      {{ data.hello }}
    </div>
  </EdgeLabelRenderer>
</template>
