<template>
<div>

  <q-card style="width: 30%; left: 35%;margin-top: 10%;height:45vh;border-radius: 10px">
      <q-card-section>
        <div class="text-h6">Login Page</div>
      
      </q-card-section>

      <q-separator dark inset />

      <q-card-section style="display: flex;flex-direction: column;gap: 1rem">
      
        <q-input v-model="email" label="Email" color="blue" bg-color="white" :rules="[ val => val && val.length > 0 || 'Enter Your Email']" />

        <q-input v-model="password" type="password" label="Password"   color="blue" bg-color="white" />
    
        l<q-btn color="primary" @click="login">Login</q-btn>
        
      </q-card-section>

      <p style="margin-left: 10rem;">NOT A MEMBER? <label style="cursor: pointer;"> 

        <NuxtLink to="/signup" style="color:black">Signup</NuxtLink></label> </p>

    </q-card>

  </div>
   
</template>
  
  <script setup>

  const formData = ref({
    name: '',
    email: ''
  });
  
// validation - filed is empty

  const submitForm = () => {
    console.log('Form submitted with data:', formData);
  };

  </script>
  