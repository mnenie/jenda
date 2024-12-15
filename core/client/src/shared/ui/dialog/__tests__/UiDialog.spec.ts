import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, ref } from 'vue'
import { UiDialog, UiDialogClose, UiDialogContent, UiDialogTitle, UiDialogTrigger } from '..'

const OPEN_TEXT = 'open'
const TITLE_TEXT = 'title'

const DialogTest = defineComponent({
  components: { UiDialog, UiDialogTrigger, UiDialogContent, UiDialogClose, UiDialogTitle },
  setup() {
    const isOpen = ref(false)
    return { isOpen }
  },
  template: `
    <UiDialog v-model:open="isOpen">
      <UiDialogTrigger>
        ${OPEN_TEXT}
      </UiDialogTrigger>
      <UiDialogContent>
        <UiDialogTitle>${TITLE_TEXT}</UiDialogTitle>
      </UiDialogContent>
    </UiDialog>
  `,
})

describe('tests for UiDialog', () => {
  it('should render correctly with default slot', () => {
    const wrapper = mount(UiDialog, {
      slots: { default: '<div>dialog</div>' },
      props: { defaultOpen: true },
    })
    expect(wrapper.html()).toContain('<div>dialog</div>')
  })

  it('should render dialog components correctly', async () => {
    const wrapper = mount(DialogTest, {
      global: {
        stubs: { teleport: true },
      },
    })

    expect(wrapper.html()).toContain(OPEN_TEXT)
    expect(wrapper.html()).not.toContain(TITLE_TEXT)

    wrapper.vm.isOpen = true
    expect(wrapper.vm.isOpen).toBe(true)
  })

  it('should pass defaultOpen prop to DialogMenuRoot', () => {
    const wrapper = mount(UiDialog, { props: { defaultOpen: true } })
    const root = wrapper.findComponent({ name: 'DialogRoot' })
    expect(root.props('defaultOpen')).toBe(true)
  })

  it('should emit openChange events correctly', () => {
    const wrapper = mount(UiDialog)
    wrapper.vm.$emit('openChange', true)
    expect(wrapper.emitted('openChange')).toBeTruthy()
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
  })
})
