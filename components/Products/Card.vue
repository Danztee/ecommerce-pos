<script setup lang="ts">
import type { Product } from "../../types";
import formatPrice from "../../utils/formatPrice";

defineProps<{
  product: Product;
}>();

const addToCart = (productId: string) => {};
</script>

<template>
  <div class="ProductsCard">
    <article class="product relative">
      <div class="product-container">
        <img
          :src="product.image"
          class="product-img w-full block h-[15rem] object-cover rounded-[var(--radius)]"
          :alt="product.name"
        />

        <div class="product-icons">
          <a :href="'product.html?id=' + product.id" class="product-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </a>
          <button
            @click="addToCart(product.id)"
            class="product-cart-btn product-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-shopping-cart"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </button>
        </div>
      </div>
      <footer class="text-center py-[0.75rem]">
        <p class="product-name">{{ product.name }}</p>
        <h4 class="product-price">{{ formatPrice(product.price) }}</h4>
      </footer>
    </article>
  </div>
</template>

<style scoped>
.product-container {
  position: relative;
}

.product-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  transition: var(--transition);
}
.product-icon {
  width: 2.25rem;
  height: 2.25rem;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: var(--transition);
  cursor: pointer;
  font-size: 1rem;
  border-color: transparent;
  margin: 0 0.5rem;
}
.product-icon:hover {
  background: var(--clr-primary-7);
}
.product-container:hover .product-icons {
  opacity: 1;
}

.product-name {
  margin-bottom: 0.25rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
}
.product-price {
  margin-bottom: 0;
  color: var(--clr-grey-3);
  font-weight: 700;
}
</style>
