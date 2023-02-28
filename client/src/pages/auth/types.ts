export interface UserForm {
  username: string;
  password: string;
}

export interface SignUp extends UserForm {
  email: string;
  verifyPassword: string;
}
