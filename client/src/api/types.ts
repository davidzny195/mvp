export interface ResponseData {
  success: boolean;
  message: string;
}

export interface WithToken extends ResponseData {
  token: string;
  user: object;
}
