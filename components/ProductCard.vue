<template>
    <q-card
      style="max-width: 250px; align-items: center"
      rounded
      class="bg-light-blue text-white q-mb-md"
      bordered>
      <div class="product-card-content">
        <q-card-section>
          <p>{{ product.title }}</p>
          <p>{{ product.category }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.userid }}</p>
        </q-card-section>

        <div class="btn q-pa-md q-gutter-sm">

          <NuxtLink :to="`products/${product.id}`">
            <q-btn color="amber" glossy label="View Details" />
          </NuxtLink>
        </div>

        <q-card-actions align="center" style="display: flex; gap: 0.5rem "> 

<div
  class="counter-container"
  style="
    display: flex; gap:0.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 16px; /* Space above the counter section */">


          <q-btn @click="cartStore.decreaseCount(product.id)"> - </q-btn>

          <span>{{ product.quantity }}</span>

          <q-btn @click="cartStore.increaseCount(product.id)"> + </q-btn>

          <!-- 
         <div v-for="product in products" :key="product.id">
        -->

          <q-btn
            @click="addToCart(product.id)"
            color="primary"
            label="Add to Cart"
          />

        </div>
        </q-card-actions>
      </div>
    </q-card>
</template>

<script setup>
// declaring props to use in other components for id params
const { product } = defineProps(["product"]);

console.log(product, "product");

import { useCartStore } from "@/stores/cart"; // Import cart store
const cartStore = useCartStore(); // Access the cart store

const addToCart = (product) => {
  cartStore.addItem(product); // Call the cart store's addItem action
};
</script>

<style scoped>
/* .product-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;  
} */
</style>
