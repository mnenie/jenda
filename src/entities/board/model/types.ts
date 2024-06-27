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
