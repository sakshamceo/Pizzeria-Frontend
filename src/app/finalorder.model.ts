// finalorder.model.ts
import { Pizza } from "./pizza.model";
export interface Final {
    name: string;
    order: Pizza[];
    subtotal: number;
  }
  