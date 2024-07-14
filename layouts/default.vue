<template>
  <div>
    <header>
        <nav>
        <q-toolbar-title>My App</q-toolbar-title>
        <q-toolbar elevated class="bg-primary text-white bold q-pt-lg q-space-between">
          
          <div class="q-gutter-md q-mr-sm" style="display: flex; align-items: center; flex: 1;">

            <div v-if="userStore.name">

              <NuxtLink to="/dashboard" class="text-white link-unstyled q-pa-md">Dashboard</NuxtLink>
              <NuxtLink to="/about" class="text-white link-unstyled q-pa-md">About</NuxtLink>
              <NuxtLink to="/products" class="text-white link-unstyled q-pa-md">Products</NuxtLink>
              <NuxtLink to="/table" class="text-white link-unstyled q-pa-md">Table</NuxtLink>
              <NuxtLink to="/table2" class="text-white link-unstyled q-pa-md">Table2</NuxtLink>
              <NuxtLink to="/InfiniteScroll" class="text-white link-unstyled q-pa-md">Scroll</NuxtLink>
              <NuxtLink to="/user" class="text-white link-unstyled q-pa-md">TASK</NuxtLink>
              <NuxtLink to="/connect" class="text-white link-unstyled q-pa-md">DB Check</NuxtLink>

              <div style="margin-right: auto; display: flex; align-items: center;">
            <q-btn flat icon="add_shopping_cart" label="Cart" @click="openDialog">
              <q-chip>{{ cartItem }}</q-chip>
            </q-btn>

          </div>
        
            </div>

            <div v-else style="margin-left: auto;">
              <q-btn><NuxtLink to="/" class="text-white link-unstyled q-pa-md">Login</NuxtLink></q-btn>
            </div>
          </div>

          <div v-if="userStore.name" style="display: flex; align-items: center; margin-left: auto;">
            <span class="q-mr-md"> {{ userStore.name }}</span>
            
            <q-btn @click="logout" class="text-white link-unstyled q-pa-md">Logout</q-btn>
          </div>

          </q-toolbar>
      </nav>

      <div>
        <q-dialog v-model="openCart">
          <q-card>
            <q-card-section>
              <div class="text-h6">Added Item</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div v-for="cartItem in addedItem" :key="cartItem.id">
                <q-btn push color="white" text-color="primary">
                  <h6>Title:</h6>
                  {{ cartItem.title }}<br />
                  <q-badge color="orange" floating>{{ cartItem.quantity }}</q-badge>
                </q-btn>
                <br />
                <h5>{{ cartItem.price }}</h5>
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { Quasar } from "quasar";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/useUserStore";

const cartStore = useCartStore();
const userStore = useUserStore();
const route = useRouter();

const cartLength = computed(() => cartStore.addedCartItem.length);
const cartItem = computed(() => cartStore.cartItemCount);
console.log(userStore.name, "Name in default page");

const openCart = ref(false);
const addedItem = ref([]);

const logout = async () => {
  userStore.name = "";
  userStore.clearName();
  console.log("user logged out");
  route.push("/login");
};
console.log(addedItem, "addeditem");

const openDialog = () => {
  openCart.value = true;
  addedItem.value = cartStore.addedCartItem;
  console.log(addedItem, "addedItem");
};

onMounted(() => {
  if (!userStore.name) {
    route.push("/login");
  }
});
</script>

<style scoped>
.q-gutter-md {
  margin-left: 6px; /* Adjust as needed for spacing */
}
.q-mr-sm {
  margin-right: 6px; /* Adjust as needed for spacing */
}
.q-mr-md {
  margin-right: 12px; /* Adjust as needed for spacing */
}

.link-unstyled {
  text-decoration: none !important; /* Remove underline */
}

.link-unstyled:hover {
  text-decoration: none !important; /* Ensure no underline on hover */
}

.q-pa-md {
  padding: 12px; /* Adjust padding as needed */
}
</style>
