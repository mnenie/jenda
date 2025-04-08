import type { DateParams } from "@/modules/common/types"
import type { BoardCard } from "./board"

export interface Column extends DateParams {
  _id: string
  title: string
  description?: string
  cards?: BoardCard[]
  estimate?: number
  limit?: number
  color?: string
}
