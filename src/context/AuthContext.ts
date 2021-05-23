import { createContext } from "react";

import { AuthState } from "module/auth";

export const AuthContext = createContext<AuthState>({
  authenticated: false,
  error: null,
  loading: true,
  token: null,
});
