<template>
 <q-layout>
    <q-page-container>
 <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="width: 400px;">

        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit.prevent="login">
            <q-input
              v-model="email"
              type="email"
              label="Email"
              filled
              required
              class="q-mb-md"/>

            <q-input
              v-model="password"
              type="password"
              label="Password"
              filled
              required
              class="q-mb-md"
            />
            <q-btn type="submit" label="Login" color="primary" class="full-width" />
            <p style="margin-left: 10rem;">NOT A MEMBER? <label style="cursor: pointer;"> 

            <NuxtLink to="/register" style="color:black">Signup</NuxtLink></label> </p>

          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
</q-page-container>
</q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const email = ref('')
  const password = ref('')
  
  const login = () => {
    console.log('Email:', email.value)
    console.log('Password:', password.value)

    // Handle login logic here

    }

  const redirectToRegister = () => {
  router.push('/register')
}

  </script>
  
  <style scoped>
  .full-width {
    width: 100%;
  }
  </style>
  