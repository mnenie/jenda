import type { Review } from '../types'
import { onMounted, ref } from 'vue'

export default function useTextChanging(reviews: Review[]) {
  // so, maybe Ill do with live data
  const currentIndex = ref(0)

  const changeReviewText = () => {
    currentIndex.value = Math.floor(Math.random() * reviews.length)
  }
  onMounted(() => {
    changeReviewText()
  })

  return {
    currentIndex,
    changeReviewText,
  }
}
