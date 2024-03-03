<script setup lang="ts">
import { onMounted } from "vue";
import { useMainStore } from "~/store/index";
const store = useMainStore();

onMounted(async () => {
  await store.getAllProducts();
  await store.updateCartState();
});
</script>

<template>
  <div id="app">
    <Cart />
    <Header />
    <slot />
    <Footer />
  </div>
</template>
