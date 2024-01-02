import UserLocationContextType from "@/context-models/UserLocationContextType";
import { createContext } from "react";

export const UserLocationContext = createContext<UserLocationContextType | null>(null);