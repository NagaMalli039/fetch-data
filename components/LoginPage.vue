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
            <q-btn @click="logData" type="submit" label="Login" color="primary" class="full-width" />
            <p style="margin-left: 10rem;"> NOT A MEMBER? <label style="cursor: pointer;"> 

            <NuxtLink to="/register" style="color:black">Register</NuxtLink></label> </p>

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
  import axios from 'axios'
  import { useUserStore } from '@/stores/useUserStore';

  
const email = ref('')
const password = ref('')

const router=useRouter();  
const userStore = useUserStore();

  const login = () => {
    console.log('Email:', email.value)
    console.log('Password:', password.value)

    // Handle login logic here

    }

//object 

// const logData=async()=>{

//   const loginData={
//   email:email.value,
//   password:password.value
// }
// }

// try {
//   console.log(loginData, 'loginData')
//   const response = await axios.post('/api/register', loginData);

//   console.log(response.data);
//   // Optionally, redirect to login page or show success message
//   router.push('/');
// }
//   catch (error) {
//   console.error('Error registering user:', error);
//   // Handle error (show error message, etc.)
// }


const logData=async()=>{

//object 
const loginData={
  
  email:email.value,
  password:password.value
}

try {
  console.log(loginData, 'loginData')
  const response = await axios.post('/api/login', loginData);

  console.log(response.data);


  const userName = response.data.name; // Assuming the response includes the user's name
    userStore.setName(userName); // Set the user's name in the store

    // Store the user's name

console.log(userName, 'NAME')

  // Redirect to Home page 

  router.push('/dashboard');

} catch (error) {
  console.error('Error logging in user:', error);
  // Handle error (show error message, etc.)
}
};

  </script>
  
  <style scoped>
  .full-width {
    width: 100%;
  }
  </style>