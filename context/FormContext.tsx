import { FormDataModel } from "@/models/FormDataModel";
import React from "react";

export const FormContext = React.createContext<FormDataModel | null>(null);