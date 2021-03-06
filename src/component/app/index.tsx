import { Route, Routes } from "react-router-dom";

import Signin from "component/page/signin";
import { AuthContext } from "context/AuthContext";
import { useAuth } from "module/auth";

import { AuthenticatedRoute } from "./AuthenticatedRoute";

export function App() {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="*" element={<AuthenticatedRoute />} />
      </Routes>
    </AuthContext.Provider>
  );
}
