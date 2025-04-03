import type { User } from "@/modules/auth/types"
import type { Label, Priority, DateParams } from "./shared"

type Comment = {
  _id: string
  message: string
  user: Omit<User, 'email' | 'role'>
}

type Asset = {
  _id: string
  file: Blob | File | string
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
