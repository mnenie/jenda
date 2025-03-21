import { inject, onBeforeMount, provide, ref, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMagicKeys } from '@vueuse/core'
import { useBoardsStore } from '../stores/boards'
import type { BoardMenuContext } from '../types/contexts'
import type { InjectionKey } from 'vue'

export function useImages() {
  const images = ref<{ [key: string]: any }>({})

  const boardStore = useBoardsStore()
  const { board } = storeToRefs(boardStore)

  function selectImage(img?: string) {
    board.value.image = img
  }
  onBeforeMount(async () => {
    // @ts-ignore
    const modules = import.meta.glob('@/shared/assets/imgs/menu/*.{jpeg,jpg,png,svg}')
    for (const path in modules) {
      const module = await modules[path]()
      images.value[path] = (module as unknown as Record<string, any>).default
    }
  })

  return {
    selectImage,
    images,
  }
}

export const BOARD_MENU_KEY: InjectionKey<BoardMenuContext> = Symbol('board-menu')

export function provideBoardMenuContext<T extends BoardMenuContext>(value: T) {
  provide(BOARD_MENU_KEY, value)
}

export function useBoardMenuContext() {
  return inject(BOARD_MENU_KEY)!
}

export function useDialogsShortcuts() {
  const isRemoveDialogOpen = shallowRef(false)
  const isEditDialogOpen = shallowRef(false)

  const { meta_ctrl_e, meta_ctrl_b } = useMagicKeys()

  watch([meta_ctrl_b, meta_ctrl_e], () => {
    if (meta_ctrl_b.value)
      isRemoveDialogOpen.value = true
    if (meta_ctrl_e.value)
      isEditDialogOpen.value = true
  })

  return {
    isRemoveDialogOpen,
    isEditDialogOpen,
  }
}
