import { ref } from 'vue';
import type { Review } from '../lib/types';

export const reviews = ref<Review[]>([
  {
    id: '0',
    author: '@alexpeshkov',
    text: `Y'all Dizzo is amazing! 🙌 Barely an hour since I've been here and I don't want to leave my workspace. 🤯🤯🤯`
  },
  {
    id: '1',
    author: '@airvt1x',
    text: `Check out this amazing product Dizzo. A must give try #newidea #tasks`
  }
]);
