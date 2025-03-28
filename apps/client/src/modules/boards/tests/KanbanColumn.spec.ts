import { type ComponentPublicInstance, h, nextTick } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { toRef } from '@vueuse/core'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import { createTestingPinia } from '@pinia/testing'
import KanbanColumn from '../components/kanban/columns/ColumnItem.vue'
import { card, cards } from './fixtures/kanban-card'
import type { VueWrapper } from '@vue/test-utils'
import type { BoardCard, Column } from '../types'

type KanbanColumnTestInstance = ComponentPublicInstance<
  {
    column: Column
  },
  {},
  {
    cards?: BoardCard[]
    _cardsTR?: HTMLElement | null
  }
>

const dndMockComposable = vi.hoisted(() => {
  return {
    useDragAndDrop: vi.fn(() => {
      const accepts = (): boolean => {
        return cards.length === 1
      }
      return [
        toRef(null),
        toRef(cards),
        accepts,
      ]
    }),
  }
})

vi.mock('@formkit/drag-and-drop/vue', () => {
  return {
    useDragAndDrop: dndMockComposable.useDragAndDrop,
  }
})

let _wrapper: VueWrapper<KanbanColumnTestInstance>

describe('tests for column at kanban', () => {
  beforeEach(() => {
    _wrapper = mount(KanbanColumn, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })],
      },
      slots: {
        'column-content': h('div', {
          cards: [{ ...card }],
          column: {},
        }, [`${`${card.title} card`}`]),
      },
      props: {
        column: {
          _id: 'test-id',
          title: '_test column',
          description: 'test description',
          estimate: 10,
          cards: [
            {
              ...card,
            },
          ],
        },
      },
    })
  })

  it('should work with slot for cards', () => {
    expect(_wrapper.html()).toContain('_test title card')
  })

  it('should reactively update column properties in template', async () => {
    const updatedFields = {
      ..._wrapper.props().column,
      title: 'new title',
      description: 'new description',
      color: '#color',
    }
    await _wrapper.setProps({ column: updatedFields })
    await nextTick()
    expect(_wrapper.html()).toContain('new title')
    expect(_wrapper.html()).toContain('new description')
  })

  describe('useDragAndDrop composable behavior', () => {
    it('should initialize drag and drop with mocked values', async () => {
      await nextTick()
      expect(_wrapper.vm.cards).toBeDefined()
      expect(_wrapper.vm.cards?.length).toBe(1)
      expect(_wrapper.vm.cards?.[0].title).toBe(card.title)
    })
    it('should have the samee number of cards if the column has a limit', async () => {
      const limit = 1
      _wrapper.setProps({
        column: { ..._wrapper.props().column, limit },
      })
      const useDnd = vi.mocked(useDragAndDrop)
      expect(useDnd).toBe(dndMockComposable.useDragAndDrop)
      const [_, _cards] = useDnd(_wrapper.props().column.cards!)
      expect(_cards.value.length).toBe(limit)
    })
  })
})
