<script setup lang="ts">
import { RouteNames } from '@/shared/config/consts'
import { UiButton } from '@/shared/ui'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

const router = useRouter()

function leaveTeam() {
  toast.info('You left the team', {
    description: 'Find suitable or become an admin of new team',
  })
  router.push({ name: RouteNames.boards })
}
</script>

<template>
  <UiButton variant="destructive" @click="leaveTeam">
    <div i-lucide-x text-base />
    {{ $t('members.btns.leave') }}...
  </UiButton>
</template>
