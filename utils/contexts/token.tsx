"use client"

import { Profile } from "../apis/users/types"
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { setAxiosConfig } from "../axiosWithConfig"
import { getProfile } from "../apis/auth/api"


interface Context {
    token: string
    user: Partial<Profile>
    changeToken: (token?: string) => void
    refetchProfile: () => void
}

interface Props {
    children: ReactNode
}

const contextValue: Context = {
    token: "",
    user: {},
    changeToken: () => {},
    refetchProfile: () => {}
}

const TokenContext = createContext<Context>(contextValue)

export function TokenProvider({children} : Readonly<Props>) {
    const {toast} = useToast()

    const [token, setToken] = useState(localStorage.getItem("token") ?? "")
    const [user, setUser] = useState<Partial<Profile>>({})

    useEffect(() => {
        setAxiosConfig(token)
        token !== "" && fetchProfile
    })

    const fetchProfile = useCallback(async () => {
        try {
          const result = await getProfile();
          setUser(result.data.user);
        } catch (error: any) {
          toast({
            title: "Oops! Something went wrong.",
            description: error.message.toString(),
            variant: "destructive",
          });
        }
      }, [token]);

      const refetchProfile = useCallback(() => {
        fetchProfile();
      }, []);   

      const changeToken = useCallback(
        (token?: string) => {
          const newToken = token ?? "";
          setToken(newToken);
          if (token) {
            localStorage.setItem("token", newToken);
          } else {
            localStorage.removeItem("token");
            setUser({});
          }
        },
        [token]
      );

      const tokenContextValue = useMemo(
        () => ({
          token,
          user,
          changeToken,
          refetchProfile,
        }),
        [token, user, changeToken, refetchProfile]
      );

      return (
        <TokenContext.Provider value={tokenContextValue}>
          {children}
        </TokenContext.Provider>
      );
};

export function useToken() {
    const context = useContext(TokenContext);
  
    if (context === undefined) {
      throw new Error("ERROR, useToken must be used within TokenContext");
    }
  
    return context;
};
  