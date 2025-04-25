import type { User } from '@/modules/auth/types';
import type { Card } from '@/modules/boards/types';
import type { CommentGroup } from './comment';

export type TaskView = 'compact' | 'expanded'

export type Attachment<F extends File | Blob> = F

interface Activity {
  id: string
  user: Pick<User, 'email' | 'photoUrl' | '_id'>
  action: string
  date: Date
  type: 'status' | 'assignee' | 'estimate' | 'date' | 'asset' | 'title' | 'description' | 'labels'
}

export interface Task extends Omit<Card, 'comments'> {
  description?: Description,
  activities?: Activity[],
  commentsGroup?: CommentGroup[],
}

export interface Description extends Pick<Card, 'updatedAt'> {
  content?: string
  updatedBy: Pick<User, 'email' | '_id'>
  status: 'edited' | 'created'
}
