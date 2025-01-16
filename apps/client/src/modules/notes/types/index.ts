import type { User } from "@/modules/auth/types"

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

// tiptap editor data
export interface NoteData{
  content?: string;
  type: 'doc';
};


export interface Note extends DateParams, NoteData {
  _id: string
  title: string
  creator: User
  updatedBy?: User
  users: User[]
  // needs to be fixed
  date: DateParams['updatedAt'] | string
}
