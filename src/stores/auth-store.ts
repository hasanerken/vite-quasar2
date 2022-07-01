import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    role: 'client',
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      // this.counter++;
    },
  },
});
