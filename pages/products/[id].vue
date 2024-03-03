<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useMainStore } from "~/store";
import formatPrice from "~/utils/formatPrice";
import type { Product } from "~/types";

const route = useRoute();
const store = useMainStore();

const productId = route.params.id as string;
const product = ref<Product | null | undefined>(null);
const loading = ref<boolean>(true);

watch(
  () => store.items,
  (items) => {
    if (productId) {
      product.value = items.find((item) => item.id === productId) || null;
    }
  }
);

const fetchProduct = async () => {
  if (productId) {
    product.value = await store.getProductById(productId);
    loading.value = false;
  }
};
fetchProduct();
</script>

<template>
  <div>
    <div
      v-if="loading"
      class="h-[calc(100vh_-_176px)] flex flex-col justify-center"
    >
      <h3 class="text-center">Loading...</h3>
    </div>

    <div v-if="product && !loading" class="product-details">
      <section
        class="p-6 lg:p-10 bg-[var(--clr-grey-10)] text-[var(--clr-grey-5)]"
      >
        <div class="section-center">
          <h3 class="page-hero-title">
            <RouterLink
              to="/"
              class="underline hover:text-[var(--clr-primary-6)]"
              >Home</RouterLink
            >
            /
            {{ product?.name }}
          </h3>
        </div>
      </section>

      <section class="p-6 lg:p-10 single-product">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <img
            :src="product?.image"
            class="single-product-img h-[25rem] object-cover rounded-[var(--radius)]"
            :alt="product?.name"
          />
          <article class="single-product-info">
            <div>
              <h2 class="single-product-title">{{ product?.name }}</h2>
              <p class="single-product-price">
                {{ formatPrice(product?.price) ?? 0 }}
              </p>
              <p class="single-product-desc">
                {{ product?.additionalDetails.description }}
              </p>
              <button
                class="bg-[var(--clr-primary-6)] p-2 rounded-md text-white px-6"
                @click="store.addItem(product)"
              >
                Add to Cart
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.single-product-company {
  font-size: 1.2rem;
  color: var(--clr-grey-8);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  margin-bottom: 1.25rem;
}
.single-product-price {
  color: var(--clr-grey-3);
  font-size: 1.25rem;
  font-weight: 500;
}

.product-color {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #222;
  margin: 0.5rem 0.5rem 1.5rem 0;
}

.single-product-desc {
  max-width: 25em;
  line-height: 1.8;
}
@media screen and (min-width: 992px) {
  .single-product-center {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
