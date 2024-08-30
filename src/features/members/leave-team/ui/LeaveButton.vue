<script setup lang="ts">
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';
import { RouteNames } from '@/shared/config/consts';
import { UiButton } from '@/shared/ui';
import { X } from 'lucide-vue-next';

const router = useRouter();

const leaveTeam = () => {
  toast.info('You left the team', {
    description: 'Find suitable or become an admin of new team'
  });
  router.push({ name: RouteNames.boards });
};
</script>

<template>
  <UiButton :variant="'destructive'" @click="leaveTeam">
    <X :size="17" style="margin-right: 6px" />
    {{ $t('members.btns.leave') }}...
  </UiButton>
</template>
