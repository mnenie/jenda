import type { Label, Priority } from "./shared"
import type { User } from "@/modules/auth/types"
import type { Comment } from "@/modules/tasks/types/comment"
import type { DateParams } from "@/modules/common/types"

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
