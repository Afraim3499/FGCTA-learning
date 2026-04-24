"use client";

import { createContext, useContext, ReactNode } from "react";

import { useProgressStore } from "@/lib/stores";
import { useEffect } from "react";

interface UserContextType {
  user: any; 
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ user, children }: { user: any; children: ReactNode }) {
  const setProgress = useProgressStore((state) => state.setProgress);

  useEffect(() => {
    if (user?.progress) {
      setProgress(user.progress);
    }
  }, [user, setProgress]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context.user;
}
