<template>
  <v-card>
    <v-img
        :src="eventStore.league.strBanner"
        height="200px"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title  style="color: white; text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);">
        {{ eventStore.league.strLeague }}
      </v-card-title>
    </v-img>

    <v-card-text>
      <div><b>Sport:</b> {{ eventStore.league.strSport }}</div>
      <div><b>Formed Year:</b> {{ eventStore.league.intFormedYear }}</div>
      <div><b>Country:</b> {{ eventStore.league.strCountry }}</div>
      <div><b>Current Season:</b> {{ eventStore.league.strCurrentSeason }}</div>
      <div><b>First Event Date:</b> {{ eventStore.league.dateFirstEvent }}</div>
      <div><b>Description:</b> {{ eventStore.league.strDescriptionEN }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn icon :href="`https://${eventStore.league.strFacebook}`" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon :href="`https://${eventStore.league.strInstagram}`" target="_blank">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon :href="`https://${eventStore.league.strTwitter}`" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon :href="`https://${eventStore.league.strYoutube}`" target="_blank">
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn text :href="`https://${eventStore.league.strWebsite}`" target="_blank">Visit Website</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useLeagueStore } from "../../stores/league";

  const route = useRoute();
  const eventStore = useLeagueStore();
  const { id } = route.params;

  onMounted(async () => {
    await eventStore.getLeagueById(id);
  });
</script>

<style scoped>

</style>
