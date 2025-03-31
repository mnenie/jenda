import type { User } from "@/modules/auth/types"
import type { DateParams, Label, Visibility } from "./shared"
import type { Column } from "./column"
import type { Status } from "./shared"
import type { Card } from "./task"

export interface BoardRow extends Omit<Board, 'columns'> {
  tasks?: number
}

export interface Board extends DateParams {
  _id: string
  name: string
  columns?: Column[]
  status: Status
  labels: Label[]
  users: User[]
  color?: string
  estimate?: number
  creator?: User
  // fix
  date?: string
  visibility?: Visibility
  image?: string
}

export interface BoardCard extends Omit<Card, 'assets' | 'creator' | 'timeLimit'> {}
