<template>
    <q-layout>
        <q-page-container>
    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="width: 400px;">
        <q-card-section>
          <div class="text-h6">Register</div>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit.prevent="register">
            <q-input
              v-model="firstname"
              label="First Name"
              filled
              required
              class="q-mb-md"
            />
            <q-input
              v-model="lastname"
              label="Last Name"
              filled
              required
              class="q-mb-md"
            />
            <q-input
              v-model="email"
              type="email"
              label="Email"
              filled
              required
              class="q-mb-md"
            />
            <q-input
              v-model="dob"
              label="Date of Birth"
              mask="date"
              :rules="['date']"
              filled
              required
              class="q-mb-md"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="dob">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-btn type="submit" label="Register" color="primary" class="full-width" />
            <p style="margin-left: 10rem;">Already have account? <label style="cursor: pointer;"> 
            <NuxtLink to="/login" style="color:black">Login</NuxtLink></label> </p>

          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
</q-page-container>
</q-layout>

  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const firstname = ref('')
  const lastname = ref('')
  const email = ref('')
  const dob = ref('')
  
  const register = () => {
    console.log('Register data:', { firstname, lastname, email, dob })
    // Handle registration logic here
  }
  </script>
  
  <style scoped>
  .full-width {
    width: 100%;
  }
  </style>
  