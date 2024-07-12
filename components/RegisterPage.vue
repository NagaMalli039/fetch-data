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
              v-model="name"
              label="Name"
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
              class="q-mb-md"/>

              <q-input
              v-model="password"
              label="Password"
              type="password"
              filled
              required
              class="q-mb-md"/>
            
            <q-btn @click="addData" label="Register" color="primary" class="full-width" />
            <p style="margin-left: 10rem;"> Already have account? <label style="cursor: pointer;">
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
  import { useRouter } from 'vue-router';
  import axios from 'axios'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')

  const router=useRouter(); 

    const register = () => {
    console.log('Email:', email.value)
    console.log('Password:', password.value)
  }

  const addData=async()=>{

    //object 
    const userData={
      name:name.value,
      email:email.value,
      password:password.value
    }

    try {
      console.log(userData, 'userData')
      const response = await axios.post('/api/register', userData);
      console.log(response.data);
      // Optionally, redirect to login page or show success message

      router.push('/login');

    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (show error message, etc.)
    }
  };

  </script>
  
  <style scoped>
  .full-width {
    width: 100%;
  }
  </style>
  