export interface DateParams<D extends Date | string | number = string> {
  createdAt?: D;
  updatedAt?: D;
  deletedAt?: D | null;
}
