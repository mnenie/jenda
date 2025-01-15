interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface User extends DateParams {
  _id?: string
  email: string
  photoUrl?: string
  role?: string
}

export interface UserAuth extends User {
  token: string
}
