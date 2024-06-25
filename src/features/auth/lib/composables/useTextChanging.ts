import { onActivated, ref } from 'vue';
import type { Ref } from 'vue';
import type { Review } from '../types';

export default function useTextChanging(reviews: Ref<Review[]>) {
  const currentIndex = ref(0);

  const changeReviewText = () => {
    currentIndex.value = Math.floor(Math.random() * reviews.value.length);
  };
  onActivated(() => {
    changeReviewText();
  });

  return {
    currentIndex,
    changeReviewText
  };
}
