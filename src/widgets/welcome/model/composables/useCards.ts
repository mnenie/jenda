import { computed, triggerRef, watch } from 'vue';
import { useDark } from '@vueuse/core';
import { cardsInfo as cards } from '../fixtures';

export default function useCards() {
  const isDark = useDark();
  const urlImg = computed(() => (isDark.value ? '/dev/dev-card-dark.png' : '/dev/dev-card.png'));

  watch(
    isDark,
    () => {
      cards.value.forEach((c) => (c.url = urlImg.value));
      triggerRef(cards);
    },
    { immediate: true, flush: 'sync' }
  );

  return {
    cards
  };
}
