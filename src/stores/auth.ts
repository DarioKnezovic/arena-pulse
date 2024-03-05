import { defineStore } from 'pinia';
import type { LoginCredentials } from '@/interfaces/auth';
import { loginUser } from '@/services/authService';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userToken: null,
    loading: false
  }),
  actions: {
    async login(credentials: LoginCredentials) {
      this.loading = true;
      try {
        this.userToken = await loginUser(credentials);
      } catch (err: Error) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    logout() {}
  }
});
