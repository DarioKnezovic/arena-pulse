<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import layouts from './layouts';
  import { provide, shallowRef } from 'vue';
  import router from '@/router';

  const layout = shallowRef('div');

  router.afterEach((to) => {
    layout.value = layouts[to.meta.layout] || 'div';
  });

  provide('app:layout', layout);
</script>

<template>
  <v-app>
    <component :is="layout || 'div'">
      <RouterView />
    </component>
  </v-app>
</template>

<style scoped></style>
