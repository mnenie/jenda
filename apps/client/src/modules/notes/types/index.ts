import type { User } from "@/modules/auth/types"

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface Note extends DateParams {
  _id: string
  title: string
  content?: string
  creator: User
  updatedBy?: User
  users: User[]
  // needs to be fixed
  date: DateParams['updatedAt'] | string
}
