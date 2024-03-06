<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ teamStore.team.strTeam }}</h1>
        <h2>{{ teamStore.team.strLeague }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <img :src="teamStore.team.strTeamBadge" alt="Team Badge" width="100%">
      </v-col>
      <v-col cols="12" sm="6">
        <h3>Founded: {{ teamStore.team.intFormedYear }}</h3>
        <p>Stadium: {{ teamStore.team.strStadium }}</p>
        <p>Capacity: {{ teamStore.team.intStadiumCapacity }}</p>
        <p>Location: {{ teamStore.team.strStadiumLocation }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <img :src="teamStore.team.strStadiumThumb" alt="Stadium" width="100%">
        <p>{{ teamStore.team.strStadiumDescription }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>About the Team</h3>
        <p>{{ teamStore.team.strDescriptionEN }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>Connect with Us</h3>
        <v-btn icon :href="teamStore.team.strFacebook" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon :href="teamStore.team.strTwitter" target="_blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon :href="teamStore.team.strWebsite" target="_blank">
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useTeamStore } from "../../stores/team";

  const route = useRoute();
  const teamStore = useTeamStore();
  const id = route.params.id;

  onMounted(async () => {
    await teamStore.getTeamDetails(id);
  });
</script>

<style scoped>

</style>
