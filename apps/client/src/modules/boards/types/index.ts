import type { User } from '@/modules/auth/types'

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface Label {
  id?: string
  name: string
  color: string
}

export type Status = 'active' | 'archived'

export type Priority = 'none' | 'low' | 'medium' | 'high'

type Comment = {
  _id: string
  message: string
  user: Omit<User, 'email'>
}

type Asset = {
  _id: string
  file: Blob | File | string
}

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

export interface Card extends DateParams {
  _id: string
  title: string
  priority?: Priority
  labels?: Label[]
  subtasks?: Pick<Partial<Card>, 'title' | '_id' | 'labels' | 'users'>[]
  users: User[],
  creator: User
  estimate?: number
  comments?: Comment[]
  timeLimit?: Date
  assets?: Asset[]
}

export interface BoardCard extends Omit<Card, 'assets' | 'creator' | 'timeLimit'> {}

export interface Column extends DateParams {
  _id: string
  title: string
  description?: string
  cards?: BoardCard[]
  estimate?: number
  limit?: number
  color?: string
}

export interface StatusBadge {
  _id: string
  indicator: string
  status: Status
}
