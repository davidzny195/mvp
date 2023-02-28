export interface UserForm {
  email: string;
  password: string;
}

export interface SignUp extends UserForm {
  username: string;
  verifyPassword: string;
}
