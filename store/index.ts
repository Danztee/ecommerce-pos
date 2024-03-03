import { defineStore } from "pinia";
import type { CartProduct, Product, State } from "../types";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: (): State => ({
    cartItems: [],
    items: [],
  }),
  getters: {
    itemsNumber: ({ cartItems }): number => cartItems.length,
    totalPrice: ({ cartItems }): number | undefined => {
      if (cartItems.length !== 1) {
        const sum = cartItems.reduce((acc: number, obj: CartProduct) => {
          return acc + obj.price * (obj.quantity || 0);
        }, 0);
        return sum;
      }
      return cartItems[0].price * (cartItems[0].quantity || 0);
    },
  },

  actions: {
    addToCart(product: Product) {
      const existingProduct = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      } else {
        const newCartProduct: CartProduct = { ...product, quantity: 1 };
        this.cartItems.push(newCartProduct);
      }
      this.saveCartToLocalStorage();
    },

    outCart(id: string) {
      const index = this.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const item = this.cartItems[index];
        if (item?.quantity !== undefined && item.quantity > 1) {
          item.quantity--;
        } else {
          this.cartItems.splice(index, 1);
        }
        this.saveCartToLocalStorage();
      }
    },

    async getAllProducts() {
      try {
        const response = await axios.get("/products.json");
        this.items = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    getProductById(id: string): Product | undefined {
      return this.items.find((product) => product.id === id);
    },

    updateCartState() {
      const cartItemsJson = localStorage.getItem("cartItems");
      if (cartItemsJson) {
        this.cartItems = JSON.parse(cartItemsJson);
      }
    },

    saveCartToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
});
