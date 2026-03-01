export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignupFormData {
  fullName: string;
  email: string;
  company: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface AuthFormError {
  field: string;
  message: string;
}

export interface AuthStat {
  value: string;
  label: string;
}
