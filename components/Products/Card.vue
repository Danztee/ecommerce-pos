<script setup lang="ts">
import type { Product } from "../../types";
import formatPrice from "../../utils/formatPrice";

defineProps<{
  product: Product;
}>();
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

        <div
          class="product-link-container p-2 bg-[var(--clr-primary-3)] rounded-sm text-white hover:bg-[var(--clr-primary-6)]"
        >
          <NuxtLink :to="`/products/${product.id}`" class="block"
            >More Details</NuxtLink
          >
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

.product-link-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  transition: var(--transition);
}

.product-container:hover .product-link-container {
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
