import { defineComponent, toValue } from 'vue'
import { storeToRefs } from 'pinia'
import { useKanbanContext } from '../../composables/kanban'
import { useBoardsStore } from '../../stores/boards'

export default defineComponent({
  emits: ['close'],
  setup(_, { emit }) {
    const boardStore = useBoardsStore()
    const { board } = storeToRefs(boardStore)

    const { cards } = useKanbanContext()

    const addTask = () => {
      if (board.value.status === 'archived')
        return

      toValue(cards).push({
        _id: Math.random().toString(),
        title: '',
        users: [],
        labels: [],
      })
      emit('close')
    }

    return { addTask, board }
  },
  template: `
    <form @submit.prevent="addTask">
      <input v-model="title" placeholder="Task title" />
      <button type="submit">Add Task</button>
    </form>
  `,
})
