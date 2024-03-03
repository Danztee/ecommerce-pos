<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { useMainStore } from "~/store/index";

const store = useMainStore();
onMounted(async () => {
  try {
    const response = await axios.get("products.json");
    const products = response.data;
    store.addAllProducts(products);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="products p-6 lg:p-10">
    <h3 class="text-center pb-4">All Products</h3>
    <div
      class="container mx-auto grid lg:grid-cols-3 gap-10"
      v-if="store.items.length"
    >
      <ProductsCard
        v-for="product in store.items"
        :key="product.id"
        :product="product"
      />
    </div>

    <div v-else>
      <h2 class="text-center text-xl">loading...</h2>
    </div>
  </div>
</template>
