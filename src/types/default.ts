export interface ResponseDefault<T> {
  code: number;
  message: string;
  responseObject: T;
}
