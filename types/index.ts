export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
}

export interface CartProduct extends Product {
  quantity?: number;
}

export interface State {
  cartItems: CartProduct[];
  items: Product[];
}
