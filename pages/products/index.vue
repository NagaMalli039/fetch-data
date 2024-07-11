<template>
  <div>
    <p>Products</p>

    <div class="q-pa-md">
      <div class="q-gutter-md q-col-gutter-md">
        <div v-for="p in products" v-bind:key="p.id">

          <ProductCard :product="p" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import axios from "axios";
import { useCartStore } from "@/stores/cart"; // Import cart store

const cartStore = useCartStore(); // Access the cart store

const products = ref([]); // Create a reactive ref to store product data

// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     products.value = response.data;
//   } catch (error)
//   {
//     console.error('Error fetching products:', error);
//   }
// };

onMounted(async () => {
  //  fetchData()

  await cartStore.fetchData();
  products.value = cartStore.items;
}); // Call fetchData on component mount
</script>

<style scoped>
.q-mb-md {
  margin-bottom: 16px; /* Adjust spacing between cards */
} 
.q-col-gutter-md {
  margin-bottom: 16px; /* Adjust spacing between columns */
}

.q-mb-md {
  margin-bottom: 16px; /* Adjust spacing between cards */
}

.q-gutter-md {
  display: grid;
  grid-gap: 16px; /* Adjust grid gap between rows and columns */
  grid-template-columns: repeat(
    auto-fill,
    minmax(450px, 1fr)
  ); /* Adjust column width */
}



</style>
