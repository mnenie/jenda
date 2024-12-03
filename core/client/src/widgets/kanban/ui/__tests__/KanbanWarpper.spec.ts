import { AddColumn, DragColumns } from '@/features/kanban'
import i18n from '@/shared/lib/i18n'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import KanbanWrapper from '../KanbanWrapper.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

describe('tests for KanbanWrapper.vue', () => {
  const wrapper = mount(KanbanWrapper, {
    global: { plugins: [i18n] },
    props: {
      columns: [],
    },
  })

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(DragColumns).exists()).toBe(true)
    expect(wrapper.findComponent(AddColumn).exists()).toBe(true)
  })
})
