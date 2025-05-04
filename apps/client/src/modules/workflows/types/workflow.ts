import type { User } from "@/modules/auth/types";

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
  creator: User
}

export interface Chooser {
  label: string;
  value: string;
}
