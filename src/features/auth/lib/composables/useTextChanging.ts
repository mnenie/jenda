import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import type { Ref } from 'vue';
import type { Review } from '../types';

export default function useTextChanging(reviews: Ref<Review[]>) {
  const currentIndex = ref(0);

  const changeReviewText = () => {
    currentIndex.value = (currentIndex.value + 1) % reviews.value.length;
  };
  useIntervalFn(changeReviewText, 10000);

  return {
    currentIndex,
    changeReviewText
  };
}
