// store/cart.js

import { defineStore } from 'pinia';
import axios from 'axios'
import { useUserStore } from '@/stores/useUserStore'; // Import the user store


// syntax

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // Array of products in the cart
    count:0, 
    addedCartItem:[],
    loggedInUserName: '', // User's name

  }),


  getters: {

    cartItemCount()
    {
      return this.addedCartItem.reduce((total,item)=> total+item.quantity,0)
    }
    },

  actions: {

    addItem(productId) 
    {
      console.log(productId, 'productId ')

      const existingItem = this.items.find(item => item.id === productId);
      console.log(existingItem, 'existing item')

      if (existingItem) {
      // this.count++;
      
      this.addedCartItem.push(existingItem)

        // console.log(this.addedCartItem)
        // existingItem.quantity++;
      }
    },

    // Add other cart-related actions here (...)

increaseCount(productId){
  console.log(productId, 'increment')

  const existingItem = this.items.find(item => item.id === productId);

  console.log(existingItem, 'existing item')
  if (existingItem) {

    existingItem.quantity++;
    this.count++;

  } else {
    console.log('invalid item');
  }
},

decreaseCount(productId){
  const existingItem = this.items.find(item => item.id === productId);
      
      if (existingItem) {

        existingItem.quantity--;
        this.count--;
      }
},
    
async fetchData()
  {
      try
      {
      const uri='https://fakestoreapi.com/products';
      const response=await axios.get(uri);
console.log(response.data,'DATA');

      this.items=response.data.map((product)=>({

        ...product, 
        quantity:0
      
       }));
       console.log(this.items,'DATA with quantity');

      }

      catch(error){
          console.log('error in fetching id',error)
      }
  }
  },
});
