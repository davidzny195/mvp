export interface ResponseData {
  success: boolean;
  message: string;
}

export interface Token extends ResponseData {
  token: string;
}
