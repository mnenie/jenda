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
