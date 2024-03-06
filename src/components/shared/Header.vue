<template>
  <v-card>
    <v-app-bar
        color="primary"
        prominent
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Arena pulse</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item prepend-icon="mdi-home-city" title="Dashboard" value="dashboard" :to="{ name: 'admin' }"></v-list-item>
        <v-list-item prepend-icon="mdi-trophy" title="Leagues" value="leagues" :to="{ name: 'leagues' }"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

</template>

<script setup lang="ts">
  import { ref } from "vue";

  const drawer = ref(false);

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
</script>

<style scoped>

</style>
