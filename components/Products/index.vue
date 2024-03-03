<script setup>
import { onMounted } from "vue";
import { useMainStore } from "~/store/index";

const store = useMainStore();
</script>

<template>
  <div>
    <div
      class="xl:container mx-auto grid lg:grid-cols-3 gap-10"
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
