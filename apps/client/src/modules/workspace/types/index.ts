import type { User } from "@/modules/auth/types"

export interface BaseTestWorkspace {
  _id: string
  name: string
  img: string | Blob
  link: string
  status: 'active' | 'archive'
  members: User[]
  plan: 'FREE' | 'PREMIUM'
}

export type ChoosingWorkspaceItem = Pick<BaseTestWorkspace, '_id' | 'name' | 'status' | 'plan'>
