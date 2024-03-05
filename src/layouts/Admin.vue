<template>
  <div class="admin">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
  import Header from "@/components/shared/Header.vue";
  export default {
    name: 'Admin',
    components: { Header }
  };
</script>

<style scoped></style>
