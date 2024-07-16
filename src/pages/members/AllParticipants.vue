<script setup lang="ts">
import { reactive } from 'vue';
import { MembersList } from '@/widgets/members';
import type { UserType } from '@/entities/user/model';

const members = reactive<UserType[]>([
  { _id: '0', photoUrl: 'https://www.shadcn-vue.com/avatars/02.png', email: 'Alex Peshkov', role: 'admin' },
  { _id: '1', photoUrl: 'https://www.shadcn-vue.com/avatars/03.png', email: 'John Doe', role: 'member' },
  { _id: '2', photoUrl: 'https://www.shadcn-vue.com/avatars/04.png', email: 'Emily Johnson', role: 'member' }
]);
</script>

<template>
  <div style="width: 100%">
    <div v-once :class="$style.about">
      <h4 class="heading-4">Invite users</h4>
      <p class="text-sm">
        Anyone who has an invitation link can join this free workspace. The link can be disabled and recreated
        at any time. Pending invitations count towards a limit of 10 participants.
      </p>
    </div>
    <MembersList :members />
  </div>
</template>

<style module lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  margin-bottom: 30px;
  padding-bottom: 20px;

  & p {
    color: var(--zinc-500);
    max-width: 540px;
  }
}

:global(html.dark){
  .about {
    & p {
      color: var(--zinc-300);
    }
  }
}
</style>
