import { toRef, toValue } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import AddTaskFormMock from '../tests/_mock-components/AddTaskFormMock'
import { useKanbanContext } from '../composables/kanban'
import { cards } from './fixtures/kanban-card'
import type { VueWrapper } from '@vue/test-utils'

vi.mock('../composables/kanban', () => ({
  useKanbanContext: vi.fn(() => ({
    cards: toRef(cards),
  })),
}))

const KanbanKey = Symbol('kanban')

describe('tests for task creation form', () => {
  let wrapper: VueWrapper<InstanceType<typeof AddTaskFormMock>>

  beforeEach(() => {
    wrapper = shallowMount(AddTaskFormMock, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })],
        provide: {
          [KanbanKey]: {
            cards: toRef(cards),
          },
        },
      },
    })
  })

  it('should add task to cards', async () => {
    const { cards: tasks } = useKanbanContext()
    const pushSpy = vi.spyOn(toValue(tasks), 'push')

    await wrapper.find('form').trigger('submit')

    expect(pushSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        _id: expect.any(String),
        title: '',
        users: [],
        labels: [],
      }),
    )
    expect(pushSpy).toHaveBeenCalledTimes(1)
    expect(toValue(tasks).length).toBe(2)
  })

  it('should emit close event after adding task', async () => {
    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().close).toBeTruthy()
  })
})
