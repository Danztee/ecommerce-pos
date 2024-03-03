<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const products = ref([]);

const addToCart = (productId) => {};

onMounted(async () => {
  try {
    const response = await axios.get("products.json");
    console.log(response.data);
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="products p-10">
    <h3 class="text-center pb-2">All Products</h3>
    <div class="grid lg:grid-cols-3 gap-10" v-if="products.length">
      <ProductsCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
