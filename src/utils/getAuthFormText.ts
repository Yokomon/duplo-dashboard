type AuthFormKey =
  | "signIn"
  | "signUp"
  | "isAccount"
  | "noAccount"
  | "login"
  | "register"
  | "defaultHeading"
  | "userAccountHeading";

export const getAuthFormText: Record<AuthFormKey, string> = {
  signIn: "Sign in",
  signUp: "Sign up",
  isAccount: "Already have an account?",
  noAccount: "Don't have an account?",
  login: "Login",
  register: "Sign up",
  defaultHeading: "Become a member of our administrative system.",
  userAccountHeading:
    "Welcome back, please provide your credentials to proceed.",
};
