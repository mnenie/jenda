import type { User } from '@/entities/user/model';

type DateParams = {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export type Status = 'work' | 'archive' | 'closed' | 'not active';

export interface BoardPreview extends DateParams {
  _id: string;
  title: string;
  description: string;
  users: User[];
}

export interface Board extends DateParams {
  _id: string;
  columns?: Column[];
  name: string;
  color?: string;
  users: User[];
  status: Status;
}

type Tag = {
  _id: string;
  name: string;
};

export interface Card extends DateParams {
  _id: string;
  title: string;
  priority: 'none' | 'low' | 'medium' | 'high';
  tags?: Tag[];
  chat?: boolean;
  chatCount?: number;
  users: User[];
}

export interface Column extends DateParams {
  _id: string;
  title: string;
  cards?: Card[];
}

export interface StatusBadge {
  _id: string;
  indicator: string;
  status: Status;
}
