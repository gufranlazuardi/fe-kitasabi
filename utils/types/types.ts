export type Response<T = any> = {
  meta: {
    message: string;
    code: number;
    status: string;
  };
  data: T;
};
