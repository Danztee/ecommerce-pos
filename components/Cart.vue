<script setup lang="ts">
import formatPrice from "~/utils/formatPrice";

import { useMainStore } from "~/store/index";
const store = useMainStore();

function checkout() {}
</script>

<template>
  <div class="cart-overlay show" v-if="store.cartView">
    <aside class="cart">
      <button class="cart-close" @click="store.closeCart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <header>
        <h3 class="text-slanted">your cart</h3>
      </header>
      <div class="cart-items">
        <div v-for="item in store.cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" class="cart-item-img" :alt="item.name" />
          <div>
            <h4 class="cart-item-name">{{ item.name }}</h4>
            <p class="cart-item-price">{{ formatPrice(item.price) }}</p>
            <button
              class="cart-item-remove-btn"
              @click="store.removeItem(item.id)"
            >
              remove
            </button>
          </div>
          <div>
            <button
              class="cart-item-increase-btn"
              @click="store.increaseItem(item.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-up"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            </button>
            <p class="cart-item-amount">{{ item?.quantity }}</p>
            <button
              class="cart-item-decrease-btn"
              @click="store.decreaseItem(item.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <footer>
        <h3 class="cart-total text-slanted">
          total: {{ formatPrice(store.totalPrice ?? 0) }}
        </h3>
        <button class="cart-checkout btn" @click="checkout">checkout</button>
      </footer>
    </aside>
  </div>
</template>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: var(--transition);
  opacity: 0;
  z-index: -1;
}
.cart-overlay.show {
  opacity: 1;
  z-index: 100;
}
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 400px;
  background: var(--clr-grey-10);
  padding: 3rem 1rem 0 1rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: var(--transition);
  transform: translateX(100%);
  overflow: scroll;
}
.show .cart {
  transform: translateX(0);
}
.cart-close {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-grey-5);
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  cursor: pointer;
}
.cart header {
  text-align: center;
}

.cart header h3 {
  font-weight: 500;
}

.cart-total {
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;
}

.cart-checkout {
  display: block;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.cart-item {
  margin: 1rem 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 1.5rem;
  align-items: center;
}

.cart-item-img {
  width: 75px;
  height: 50px;
  object-fit: cover;
  border-radius: var(--radius);
}

.cart-item-name {
  margin-bottom: 0.15rem;
}

.cart-item-price {
  margin-bottom: 0;
  font-size: 0.75rem;
  color: var(--clr-grey-3);
}

.cart-item-remove-btn {
  background: transparent;
  border-color: transparent;
  color: var(--clr-grey-5);
  letter-spacing: var(--spacing);
  cursor: pointer;
}

.cart-item-amount {
  margin-bottom: 0;
  text-align: center;
  color: var(--clr-grey-3);
  line-height: 1;
}
.cart-item-increase-btn,
.cart-item-decrease-btn {
  background: transparent;
  border-color: transparent;
  stroke: var(--clr-primary-5) !important;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.25rem;
}
</style>
