import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Review } from '../types'

export function useTextChanging(reviews: Review[]) {
  // so, maybe Ill do with live data
  const currentIndex = ref(0)
  const route = useRoute()

  const changeReviewText = () => {
    currentIndex.value = Math.floor(Math.random() * reviews.length)
  }
  watch(() => route.path, () => {
    changeReviewText()
  }, { immediate: true })

  return {
    currentIndex,
    changeReviewText,
  }
}
