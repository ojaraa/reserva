import type { AuthContextType } from "@/models/interface";
import { createContext } from "react";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);


