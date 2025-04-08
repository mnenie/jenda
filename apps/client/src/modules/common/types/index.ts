export interface DateParams<D extends Date | string | number | null = Date> {
  createdAt?: D;
  updatedAt?: D;
  deletedAt?: D | null;
}
