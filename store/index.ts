import { defineStore } from "pinia";
import type { Product, State } from "../types";

export const useMainStore = defineStore("main", {
  state: (): State => ({
    cartItems: [],
    items: [],
  }),
  getters: {
    itemsNumber: ({ cartItems }): number => cartItems.length,
    totalPrice: ({ cartItems }): number | undefined => {
      if (cartItems.length !== 1) {
        const sum = cartItems.reduce((acc: number, obj: any) => {
          return acc + obj.price;
        }, 0);
        return sum;
      }
      return cartItems[0].price;
    },
  },

  actions: {
    inCart(n: Product) {
      return this.cartItems.push(n);
    },
    outCart(n: string) {
      let index = this.cartItems.findIndex((x) => x.id === n);
      return this.cartItems.splice(index, 1);
    },
    addAllProducts(products: Product[]) {
      this.items = products;
    },
    getProductById(id: string): Product | undefined {
      return this.items.find((product) => product.id === id);
    },
  },
});
