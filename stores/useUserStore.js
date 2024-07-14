import { defineStore } from 'pinia'
import { ref } from 'vue'

// exporting it to use it in other components

export const useUserStore = defineStore('user', () => {
  const name = ref('')

  const setName = (newName) => {
    name.value = newName
  }

  const clearName = () => {
    name.value = ''
  }

  return {
    name,
    setName,
    clearName
  }
})
