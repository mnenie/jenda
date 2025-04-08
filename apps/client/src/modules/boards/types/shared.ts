import type { User } from "@/modules/auth/types"

type S<T extends string> = T

export interface Label {
  id?: string
  name: string
  color: string
  taskCount?: number
  status?: S<'default' | 'editing'>
}

export type Status = S<'active' | 'archived'>

export type Visibility = 'private' | 'shared'

export type Priority = 'none' | 'low' | 'medium' | 'high'


export interface LabelWithStatus extends Label {
  status: S<'default' | 'editing'>
}

export type UserOption = Omit<User, 'role'>
