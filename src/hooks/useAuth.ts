import { AuthContext } from "@/context/AuthContext";
import type { AuthContextType } from "@/models/interface";
import { useContext } from "react";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};