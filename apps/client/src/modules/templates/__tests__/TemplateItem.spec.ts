import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { templatesInfo } from '../constants/templates'
import TemplateItem from '../components/TemplateItem.vue'

describe('tests for TemplateItem.vue', () => {
  const wrapper = shallowMount(TemplateItem, {
    global: {
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'templates.user': 'test user',
          }
          return translations[key]
        },
      },
    },
    props: {
      template: templatesInfo[0],
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
