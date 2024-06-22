import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserType } from './types';

export const useUserStore = defineStore('user', () => {
  const user = ref({} as UserType);

  return {
    user
  };
});
