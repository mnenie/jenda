import type { Task } from '../types'
import type { Comment } from '../types/comment'
import { $fetch } from '@/shared/api/instance'

export async function getTaskById<T extends Task>(id: string, signal?: AbortSignal): Promise<T> {
  return $fetch<T>(`/tasks/${id}`, {
    signal,
  })
}

export async function patchComment<T extends Comment>(data: Partial<Comment>): Promise<T> {
  return $fetch<T>(`/tasks/comments/${data._id}`, {
    method: 'PATCH',
    body: data,
  })
}

export async function deleteCommentById(id: string): Promise<void> {
  return $fetch(`/tasks/comments/${id}`, {
    method: 'DELETE',
  })
}
