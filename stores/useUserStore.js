// stores/useUserStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

// storename
export const useUserStore = defineStore('user', () => {
  const name = ref('');

const setName = (newName) => {
console.log(newName, 'newName');
    name.value = newName;
  
};

  return {
    name,
    setName,
  };

});
