import type { ComputedRef } from "vue"
import type { BoardCard } from "@/modules/boards/types"

export interface TaskContext {
  taskInBoard: ComputedRef<BoardCard>
}