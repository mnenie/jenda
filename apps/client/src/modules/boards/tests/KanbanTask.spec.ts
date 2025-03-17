import { type ComponentPublicInstance, nextTick } from 'vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { shallowMount, type VueWrapper } from '@vue/test-utils'
import KanbanTask from '../components/kanban/cards/CardItem.vue'
import { card } from './fixtures/kanban-card'
import type { BoardCard, Priority } from '../types'

type U = Extract<BoardCard['priority'], string>

type KanbanTaskTestInstance = ComponentPublicInstance<
  {
    card: BoardCard
  },
  {},
  {
    priorityColor?: Record<U | Priority, string>
  }
>

let _wrapper: VueWrapper<KanbanTaskTestInstance>

describe('task like a typeof card', () => {
  beforeEach(() => {
    _wrapper = shallowMount(KanbanTask, {
      props: {
        card: {
          ...card,
        },
      },
    })
  })
  it('should render correctly an usual task', () => {
    expect(_wrapper.text()).toContain('_test title')
    expect(_wrapper.vm.priorityColor).toBe('')
  })

  it('should render correctly task with a priority', async () => {
    _wrapper.setProps({
      card: {
        ...card,
        priority: 'low',
      },
    })
    await nextTick()
    expect(_wrapper.vm.priorityColor).toBe('!task-card-green')
  })

  it('should update users', async () => {
    _wrapper.setProps({
      card: {
        ...card,
        users: [
          {
            _id: '1',
            email: 'alex',
            photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
          },
        ],
      },
    })
    await nextTick()
    expect(_wrapper.props().card.users.length).toBe(1)
  })
})

describe('subtasks', () => {
  beforeEach(() => {
    _wrapper = shallowMount(KanbanTask, {
      props: {
        card: {
          ...card,
          subtasks: [
            {
              _id: 'subtask-1',
              title: 'subtask 1',
            },
            {
              _id: 'subtask-2',
              title: 'subtask 2',
            },
          ],
        },
      },
    })
  })
  it('should render subtasks correctly', () => {
    expect(_wrapper.props().card.subtasks!.length).toBe(2)
    const els = _wrapper.findAllComponents({ name: 'UiButton' })
    expect(els.length).toBe(2)
  })
  it.todo('should emit an event when a subtask is clicked', async () => {})
})
