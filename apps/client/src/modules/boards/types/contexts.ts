import type { Ref } from "vue"

export interface FilteredBoardsContext {
  sortModel: Ref<string>
  advancedModel: Ref<string[]>
}

export interface BoardMenuContext {
  closeMenu: () => void
  imagesPopover: Ref<boolean>
  isBoardMenuOpen: Ref<boolean>
}
