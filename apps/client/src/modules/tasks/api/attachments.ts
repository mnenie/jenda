import type { Attachment } from '../types/task'
import { $fetch } from '@/shared/api/instance'

export async function getTaskAttachments<T extends Attachment<File>>(id: string): Promise<T[]> {
  return $fetch<T[]>(`/tasks/${id}/attachments`)
}

export async function postTaskAttachments<T extends Attachment<File>>(taskId: string, files: Partial<T>[]): Promise<T[]> {
  return $fetch<T[]>(`/tasks/${taskId}/attachments`, {
    method: 'POST',
    body: files,
  })
}

export async function deleteAttachmentById(taskId: string, id: string): Promise<void> {
  return $fetch(`/tasks/${taskId}/attachments/${id}`, {
    method: 'DELETE',
  })
}
