export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
}

export interface State {
  // productInfo: Product;
  cartItems: Product[];
  items: Product[];
}
