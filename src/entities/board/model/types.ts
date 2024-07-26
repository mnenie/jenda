import type { UserType } from '@/entities/user/model';

type DateParams = {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export interface BoardPreview extends DateParams {
  _id: string;
  title: string;
  description: string;
  users: UserType[];
}

export interface Board extends DateParams {
  _id: string;
  columns?: Column[];
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
  users: UserType[];
}

export interface Column extends DateParams {
  _id: string;
  title: string;
  cards?: Card[];
}
