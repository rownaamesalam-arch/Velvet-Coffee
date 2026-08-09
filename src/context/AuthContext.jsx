/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState
} from "react";

import {
  login as loginRequest,
  register as registerRequest
} from "../services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  async function login(credentials) {
    const data = await loginRequest(credentials);
    const loggedInUser = data.user?.user || data.user;
    const authToken = data.user?.token || data.token;

    if (!authToken) {
      throw new Error("Login response did not include a token");
    }

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    localStorage.setItem("token", authToken);

    setUser(loggedInUser);
    setToken(authToken);

    return data;
  }

  async function register(userData) {
    return registerRequest(userData);
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(token),
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
