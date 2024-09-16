import { onActivated, ref } from 'vue';
import type { Review } from '../types';

export default function useTextChanging(reviews: Review[]) {
  // so, maybe Ill do with live data
  const currentIndex = ref(0);

  const changeReviewText = () => {
    currentIndex.value = Math.floor(Math.random() * reviews.length);
  };
  onActivated(() => {
    changeReviewText();
  });

  return {
    currentIndex,
    changeReviewText
  };
}
