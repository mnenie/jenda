type DateParams = {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export interface UserType extends DateParams {
  _id?: string;
  email: string;
  photoUrl?: string;
}

export interface UserAuth extends UserType {
  token: string;
}
