import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    occupation: string;
  } | null;
  setToken: (token: string) => void;
  setUser: (user: AuthState["user"]) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get("token") || "", // Initialize from cookies
  user: null,
  setToken: (token) => {
    Cookies.set("token", token, { expires: 7 }); // Save token in cookies for 7 days
    set(() => ({ token }));
  },
  setUser: (user) => set(() => ({ user })),
  clearAuth: () => {
    Cookies.remove("token"); // Remove token from cookies
    set(() => ({ token: "", user: null }));
  },
}));
