<script setup lang="ts">
  import { userRules, globalRules } from '../utils/validationRules';
  import { useAuthStore } from '../stores/auth';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { WebPath } from '../utils/constants/web-paths';

  const authStore = useAuthStore();
  const router = useRouter();

  const email = ref('');
  const password = ref('');
  const valid = ref(false);

  const login = async () => {
    await authStore.login({ email: email.value, password: password.value });
    router.push(WebPath.ADMIN);
  };
</script>

<template>
  <main>
    <v-form class="login-form" v-model="valid">
      <v-img src="@/assets/images/logo.svg" alt="AP logo" class="logo" aspect-ratio="2.5" />
      <v-text-field
        v-model="email"
        :rules="[userRules.email, globalRules.required]"
        autocomplete="email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        class="mt-5"
        v-model="password"
        :rules="[globalRules.required]"
        label="Password"
        type="password"
        autocomplete="current-password"
        required
      ></v-text-field>
      <v-btn
        :loading="authStore.loading"
        type="submit"
        :disabled="!valid"
        block
        class="mt-4"
        @click.prevent="login"
        >Submit</v-btn
      >
    </v-form>
  </main>
</template>
