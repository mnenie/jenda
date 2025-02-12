import type { Node } from "@vue-flow/core";

export type PickerNode = Pick<Node, 'data' | 'type'>

export type SelectedPickerNode = PickerNode & {
  id: string
}

type BLOCK_VARIANTS = 'task_created' | 'task_updated' | 'board_created' | 'board_updated'

export type Block = {
  name?: string
  type: BLOCK_VARIANTS
  icon?: string
}
