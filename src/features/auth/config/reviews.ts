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
    text: `I just learned about Dizzo and im in love 💫 Dizzo is a Trello/Jira alternative!💡so, simple for understanding !!!`
  },
  {
    id: '2',
    author: '@alexpeshkov',
    text: `Dizzo is just 🔥 Now I understand why many people like to use it instead of analogues.`
  }
]);
