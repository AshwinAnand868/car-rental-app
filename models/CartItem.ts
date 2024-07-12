import Car from "./Car";
import { FormDataModel } from "./FormDataModel";

export type CartItem = Car & FormDataModel & {quantity: number};