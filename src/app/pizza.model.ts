// pizza.model.ts
export interface Pizza {
    id: string;
    type: string;
    price: number;
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    topping:string[];
    quantity: number;
  }
  