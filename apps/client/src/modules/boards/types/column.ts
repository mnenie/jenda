import type { BoardCard } from "./board"
import type { DateParams } from "./shared"

export interface Column extends DateParams {
  _id: string
  title: string
  description?: string
  cards?: BoardCard[]
  estimate?: number
  limit?: number
  color?: string
}
