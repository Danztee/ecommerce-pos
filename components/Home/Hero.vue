<template>
  <section class="hero">
    <div class="hero-container">
      <h1 class="text-slanted">rest, relax, unwind</h1>
      <h3>Embrace your choices - we do</h3>
      <NuxtLink to="/products" class="hero-btn"> shop now </NuxtLink>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  min-height: 100vh;
  margin-top: -6rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/assets/main-bcg.jpeg) center/cover;
  display: grid;
  place-items: center;
  color: var(--clr-white);
}
.hero-container {
  width: 90vw;
  max-width: var(--max-width);
}
.hero h1 {
  font-weight: 700;
}
.hero h3 {
  text-transform: none;
  font-size: 1.5rem;
}
.hero-btn {
  color: var(--clr-white);
  background: transparent;
  border: 1px solid var(--clr-white);
  padding: 0.5rem 0.75rem;
  display: inline-block;
  margin-top: 0.75rem;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  border-radius: var(--radius);
  transition: var(--transition);
}
.hero-btn:hover {
  background: var(--clr-white);
  color: var(--clr-primary-5);
}

@media screen and (min-width: 800px) {
  .hero h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
}

@media screen and (min-width: 992px) {
  .hero h1 {
    font-size: 5.25rem;
    letter-spacing: 5px;
  }
  .hero h3 {
    font-size: 2.75rem;
    margin: 1.5rem 0;
  }
}
</style>
