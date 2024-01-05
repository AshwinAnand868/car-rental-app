import SelectedBusinessContextType from "@/context-models/SelectedBusinessContextType";
import Address from "@/models/Address";
import { createContext } from "react";

export const SelectedBusinessContext = createContext<SelectedBusinessContextType | null>(null);