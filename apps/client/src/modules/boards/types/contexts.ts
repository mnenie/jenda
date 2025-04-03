import type { Ref } from "vue"
import type { BoardCard } from "./board"
import type { Column } from "./column"

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
  cards: Ref<BoardCard[]>
  column: Ref<Omit<Column, 'cards'>>
}
