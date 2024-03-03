<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "~/store/index";

const store = useMainStore();
const route = useRoute();
</script>

<template>
  <div>
    <div
      class="xl:container mx-auto grid lg:grid-cols-3 gap-10"
      v-if="store.items.length"
    >
      <template v-if="route.path === '/'">
        <ProductsCard
          v-for="(product, index) in store.items.slice(0, 3)"
          :key="index"
          :product="product"
        />
      </template>
      <template v-else>
        <ProductsCard
          v-for="product in store.items"
          :key="product.id"
          :product="product"
        />
      </template>
    </div>

    <div v-else>
      <h2 class="text-center text-xl">loading...</h2>
    </div>
  </div>
</template>
