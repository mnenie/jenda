import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'
import CommandMenu from '../../components/CommandMenu.vue'

export default function renderItem() {
  let component: any
  let popup: any

  return {
    onStart: (props: any) => {
      component = new VueRenderer(CommandMenu, {
        props,
        editor: props.editor,
      })

      if (!props.clientRect) {
        return
      }

      popup = tippy('body', {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: 'manual',
        placement: 'bottom-start',
        theme: 'slash-menu',
      })
    },

    onUpdate(props: any) {
      component.updateProps(props)

      if (!props.clientRect) {
        return
      }

      popup[0].setProps({
        getReferenceClientRect: props.clientRect,
      })
    },

    onExit() {
      popup?.[0].destroy()
      component?.destroy()
    },
  }
}
