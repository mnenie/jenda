import { inject, provide, shallowRef, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import type { BoardMenuContext } from '../types/contexts'
import type { InjectionKey } from 'vue'

export const BOARD_MENU_KEY: InjectionKey<BoardMenuContext> = Symbol('board-menu')

export function provideBoardMenuContext<T extends BoardMenuContext>(value: T) {
  provide(BOARD_MENU_KEY, value)
}

export function useBoardMenuContext() {
  return inject(BOARD_MENU_KEY)!
}

export function useDialogsShortcuts() {
  const states = {
    isRemove: shallowRef(false),
    isEdit: shallowRef(false),
    isLabels: shallowRef(false),
  }

  const shortcuts = [
    { key: 'meta_ctrl_b', state: states.isRemove },
    { key: 'meta_ctrl_e', state: states.isEdit },
    { key: 'meta_ctrl_l', state: states.isLabels },
  ]

  const keys = useMagicKeys()

  watch(shortcuts.map(({ key }) => keys[key]), () => {
    shortcuts.forEach(({ key, state }) => {
      if (keys[key].value) {
        state.value = true
      }
    })
  })

  return states
}
