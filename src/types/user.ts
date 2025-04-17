export interface LoginPayload {
  username: string;
  password: string;
  valid: boolean;
}

export interface ForgotPasswordPayload {
  username: string;
}
