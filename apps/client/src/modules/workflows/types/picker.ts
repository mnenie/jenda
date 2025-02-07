import type { Node } from "@vue-flow/core";

export type PickerNode = Pick<Node, 'data' | 'type'>

export type SelectedPickerNode = PickerNode & {
  id: string
}
