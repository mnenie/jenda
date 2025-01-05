import type { User } from '@/entities/user/model'

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

interface Label {
  name: string
  color: string
}

export type Status = 'active' | 'archive'

type Priority = 'none' | 'low' | 'medium' | 'high'

export interface BoardRow extends DateParams {
  _id: string
  name: string
  status: Status
  labels: Label[]
  tasks: number
  estimate: number
  users: User[]
  color?: string
  // fix
  date?: string
}

export interface Board extends
  Omit<BoardRow, 'tasks' | 'estimate'>,
  DateParams {
  columns?: Column[]
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
