<script setup lang="ts">
import { ref } from "vue";
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
    <Header />
    <slot />
    <Footer />
  </div>
</template>
