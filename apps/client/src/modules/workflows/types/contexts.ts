import type { ShallowRef, Ref } from "vue";
import type { SelectedPickerNode } from "../types";

export interface FilteredWorkflowsContext {
  sortModel: Ref<string>
  search: Ref<string>
}

export interface SelectedNodeContext {
  selectedNode: ShallowRef<Partial<SelectedPickerNode>>
}
