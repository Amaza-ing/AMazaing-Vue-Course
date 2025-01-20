import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const API_URL = "https://jsonplaceholder.typicode.com/users/1";

  const getUser = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    user.value = data;
  };

  return {
    user,
    getUser,
  };
});
