import type { Task } from '../types'
import { $fetch } from '@/shared/api/instance'

export async function getTaskById<T extends Task>(id: string, signal?: AbortSignal): Promise<T> {
  return $fetch<T>(`/tasks/${id}`, {
    signal,
  })
}

export async function patchTask<T extends Task>(data: Partial<T>): Promise<T> {
  return $fetch<T>(`/tasks/${data._id}`, {
    method: 'PATCH',
    body: data,
  })
}

export async function deleteTaskById(id: string): Promise<void> {
  return $fetch(`/tasks/${id}`, {
    method: 'DELETE',
  })
}
