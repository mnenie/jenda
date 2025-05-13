<script setup lang="ts">
import { computed } from 'vue'
import UtilityIdInput from './UtilityIdInput.vue'
import type { NChooser } from '../../types'

const props = defineProps<{
  action: NChooser['value']
}>()

const type = computed(() => /vk|telegram/.test(props.action) ? 'group' : 'channel')
</script>

<template>
  <UtilityIdInput :type />
</template>
