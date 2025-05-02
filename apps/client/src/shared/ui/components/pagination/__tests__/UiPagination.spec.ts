import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MockComponent from './MockComponent.vue'

describe('tests for UiPagination', () => {
  const wrapper = mount(MockComponent, {
    props: {
      total: 50,
      itemsPerPage: 10,
      page: 1,
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit update:page when page is changed to + 1', async () => {
    const nextBtn = wrapper.findComponent({ name: 'UiPaginationNext' })
    await nextBtn.trigger('click')
    expect(wrapper.emitted('update:page')).toBeTruthy()
    expect(wrapper.emitted('update:page')?.[0]).toEqual([2])
  })
})

// more tests: https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Pagination/Pagination.test.ts
