import type { InjectionKey } from 'vue'
import type { BoardMenuContext, FilteredBoardsContext } from '../types/contexts'

export const FILTERED_BOARDS_KEY: InjectionKey<FilteredBoardsContext> = Symbol('filtered-boards')
export const BOARD_MENU_KEY: InjectionKey<BoardMenuContext> = Symbol('board-menu')
