import i18n from '@/shared/lib/i18n'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { templatesInfo } from '../../model'
import TemplateItem from '../TemplateItem.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

describe('tests for TemplateItem.vue', () => {
  const wrapper = shallowMount(TemplateItem, {
    global: {
      plugins: [i18n],
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
