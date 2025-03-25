import type { MaybeRefOrGetter, Ref } from "vue"
import type { BoardCard } from "."

export interface FilteredBoardsContext {
  sortModel: Ref<string>
  advancedModel: Ref<string[]>
}

export interface BoardMenuContext {
  closeMenu: () => void
  imagesPopover: Ref<boolean>
  isBoardMenuOpen: Ref<boolean>
}

export interface KanbanContext {
  cards: MaybeRefOrGetter<BoardCard[]>
  id: string
  currentLimit: number | undefined
}
