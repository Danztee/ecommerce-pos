export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  additionalDetails: {
    description: string;
  };
}

export interface CartProduct extends Product {
  quantity?: number;
}

export interface State {
  cartView: boolean;
  cartItems: CartProduct[];
  items: Product[];
}
