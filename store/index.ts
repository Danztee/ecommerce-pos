import { defineStore } from "pinia";
import axios from "axios";
import type { CartProduct, Product, State } from "../types";

export const useMainStore = defineStore("main", {
  state: (): State => ({
    cartView: false,
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
    // CART
    openCart() {
      this.cartView = true;
    },
    closeCart() {
      this.cartView = false;
    },
    addItem(product: Product) {
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
    removeItem(id: string) {
      const index = this.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        this.saveCartToLocalStorage();
      }
    },
    increaseItem(id: string) {
      const existingItem = this.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem?.quantity && existingItem.quantity++;
        this.saveCartToLocalStorage();
      }
    },
    decreaseItem(id: string) {
      const existingItem = this.cartItems.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity && existingItem.quantity > 1) {
          existingItem.quantity && existingItem.quantity--;
        } else {
          this.removeItem(id);
        }
        this.saveCartToLocalStorage();
      }
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

    //PRODUCTS
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
  },
});
