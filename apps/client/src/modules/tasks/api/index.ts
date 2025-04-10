import type { Task } from '../types'
import { $fetch } from '@/shared/api/instance'

export async function getTaskById<T extends Task>(id: string, signal?: AbortSignal): Promise<T> {
  return $fetch<T>(`/tasks/${id}`, {
    signal,
  })
}

export async function deleteCommentById(id: string): Promise<void> {
  return $fetch(`/tasks/comments/${id}`, {
    method: 'DELETE',
  })
}
