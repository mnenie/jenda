import type { User } from '@/modules/auth/types';
import type {Card} from '@/modules/boards/types';

interface Activity {
  id: string
  user?: Pick<User, 'email' | 'photoUrl' | '_id'>
  action: string
  date: Date
  type: 'status' | 'assignee' | 'estimate' | 'date' | 'asset' | 'title' | 'description' | 'labels'
}

export interface Task extends Card {
  description?: string,
  activities: Activity[],
}
