<script setup>
import { computed } from "vue";
import { useMainStore } from "~/store/index";

const store = useMainStore();
const route = useRoute();

const isProductRoute = computed(() => {
  return route.path.startsWith("/products");
});
</script>

<template>
  <nav class="navbar">
    <div class="nav-center">
      <div>
        <ul class="nav-links">
          <li>
            <NuxtLink
              to="/"
              class="nav-link"
              :class="{
                '!text-[var(--clr-grey-1)] hover:!text-[var(--clr-primary-5)]':
                  isProductRoute,
              }"
            >
              home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/products"
              class="nav-link"
              :class="{
                '!text-[var(--clr-grey-1)] hover:!text-[var(--clr-primary-5)]':
                  isProductRoute,
              }"
            >
              products
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="toggle-container" v-if="!store.cartView">
        <button class="toggle-cart" @click="store.openCart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-shopping-cart"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            :class="{ 'stroke-[var(--clr-grey-1)]': isProductRoute }"
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
        <span class="cart-item-count">{{ store.itemsNumber }}</span>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  height: 6rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-center {
  width: 90vw;
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-container {
  position: relative;
  margin-top: 0.75rem;
}

.toggle-cart {
  background: transparent;
  border-color: transparent;
  font-size: 1.6rem;
  color: var(--clr-white);
  cursor: pointer;
}

.cart-item-count {
  position: absolute;
  top: -0.85rem;
  right: -0.85rem;
  background: var(--clr-primary-5);
  width: 1.75rem;
  height: 1.75rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--clr-white);
  font-weight: bold;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  font-size: 1.5rem;
  text-transform: capitalize;
}
.nav-link {
  color: var(--clr-white);
  margin-right: 3rem;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  font-size: 1.25rem;
}
.nav-link:hover {
  color: var(--clr-primary-5);
}
</style>
