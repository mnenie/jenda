import type { User } from '@/modules/auth/types'

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface Label {
  name: string
  color: string
}

export type Status = 'active' | 'archived'

type Priority = 'none' | 'low' | 'medium' | 'high'

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
}

interface Tag {
  _id: string
  name: string
}

export interface Card extends DateParams {
  _id: string
  title: string
  priority: Priority
  tags?: Tag[]
  chat?: boolean
  chatCount?: number
  users: User[]
}

export interface Column extends DateParams {
  _id: string
  title: string
  cards?: Card[]
}

export interface StatusBadge {
  _id: string
  indicator: string
  status: Status
}
