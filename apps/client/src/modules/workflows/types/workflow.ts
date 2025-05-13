import type { User } from "@/modules/auth/types";
import type { Node, Edge } from "@vue-flow/core";

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export type WorkflowCard = Pick<Workflow, '_id' | 'name' | 'description' | 'state' | 'updatedAt'>

// fix with nodes and edges
export interface Workflow extends DateParams {
  _id?: string;
  name: string;
  description: string;
  state: 'draft' | 'production';
  runsCount?: number;
  creator: User;
  nodes?: Node[]
  edges?: Edge[]
}

export interface Chooser {
  value: string;
  sign?: string;
}

type TriggerValues =
  | 'column_created'
  | 'column_updated'
  | 'column_deleted'
  | 'column_task_created'
  | 'task_updated'
  | 'user_add'
  | 'you_online';

type ActionValues =
  | 'column_create'
  | 'column_update'
  | 'column_delete'
  | 'task_create'
  | 'task_update'
  | 'column_task_create'

export interface TAChooser extends Chooser {
  value: TriggerValues | ActionValues;
}

type NotificationValues =
  | 'internal_notifier'
  | 'external_vk'
  | 'external_telegram'
  | 'external_discord'

export interface NChooser extends Chooser {
  value: NotificationValues;
}
