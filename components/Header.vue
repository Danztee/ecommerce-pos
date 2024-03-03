<template>
  <nav class="navbar">
    <div class="nav-center">
      <div>
        <button class="toggle-nav" @click="toggleNav">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="nav-links">
          <li>
            <router-link to="/" class="nav-link"> home </router-link>
          </li>
          <li>
            <router-link to="/products" class="nav-link">
              products
            </router-link>
          </li>
        </ul>
      </div>

      <div class="toggle-container">
        <button class="toggle-cart" @click="toggleCart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-shopping-cart"
            width="30"
            height="30"
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
        <span class="cart-item-count">{{ cartItemCount }}</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";

const navOpen = ref(false);
const cartOpen = ref(false);
const cartItemCount = ref(1);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
};

const toggleCart = () => {
  cartOpen.value = !cartOpen.value;
};

// const logoSrc = computed(() => {
//   return "../assets/logo-white.svg";
// });
</script>

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
.nav-links {
  display: none;
}
.toggle-nav {
  background: var(--clr-primary-5);
  border-color: transparent;
  color: var(--clr-white);
  width: 3.75rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: var(--transition);
}
.toggle-nav:hover {
  background: var(--clr-primary-3);
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
@media screen and (min-width: 800px) {
  .nav-center {
    position: relative;
  }
  .nav-logo {
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
  }
  .toggle-nav {
    display: none;
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
}
@media screen and (min-width: 992px) {
  .nav-logo {
    left: 50%;
  }
}
/* page navbar */
.page .nav-link {
  color: var(--clr-grey-1);
}
.page .nav-link:hover {
  color: var(--clr-primary-5);
}
.page .toggle-cart {
  color: var(--clr-grey-1);
}
</style>
