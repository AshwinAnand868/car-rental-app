import Address from "@/models/Address";
import React from "react";

export const BusinessListContext = React.createContext<Address[] | null>(null);