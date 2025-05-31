<script setup lang="ts">
import { ref } from 'vue'
import MessageNotification from './MessageNotification.vue'
import GroupOrChanelId from './GroupOrChanelId.vue'
import type { NChooser } from '../../types'

defineProps<{
  action: NChooser['value']
}>()

// _todo
const message = ref('')
</script>

<template>
  <div>
    <p class="text-default fw500 mb-1.5">
      {{ $t('workflow.node.settings.inputs.title') }}
    </p>
    <div class="flex flex-col gap-2">
      <GroupOrChanelId :action />
      <MessageNotification v-model="message" />
    </div>
  </div>
</template>
