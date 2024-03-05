<template>
  <div>
    <v-breadcrumbs
        :items="items"
        divider="/"
    ></v-breadcrumbs>

    <v-card>
      <v-img
          :src="eventStore.event.strThumb"
          aspect-ratio="16/9"
          class="mb-2"
      ></v-img>
      <v-card-title>
        <router-link :to="{name: 'teamDetails', params: { id: eventStore.event.idHomeTeam }}">
          {{ eventStore.event.strHomeTeam }}
        </router-link>
        vs
        <router-link :to="{name: 'teamDetails', params: { id: eventStore.event.idAwayTeam }}">
          {{ eventStore.event.strAwayTeam }}
        </router-link>

      </v-card-title>
      <v-card-subtitle>{{ eventStore.event.strLeague }} - {{ eventStore.event.strSeason }}</v-card-subtitle>
      <v-card-text>
        <div>{{ eventStore.event.dateEvent }} at {{ eventStore.event.strTimeLocal }}</div>
        <div><b>Round</b>: {{ RoundTypes[eventStore.event.intRound] || 'Regular Season' }}</div>
        <div><b>Location</b>: {{ eventStore.event.strVenue }}, {{ eventStore.event.strCity }}</div>
        <div><b>Score</b>: {{ eventStore.event.intHomeScore }} - {{ eventStore.event.intAwayScore }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useEventStore } from "../../stores/event";
  import { useRoute } from "vue-router";
  import { RoundTypes } from "../../utils/constants/round-types";

  const route = useRoute();
  const eventStore = useEventStore();
  const id = route.params.id;

  let items = ref([]);

  onMounted(async () => {
    await eventStore.getSingleEvent(id);
    items.value = [
      {
        title: 'Dashboard',
        disabled: false,
        href: '/admin',
      },
      {
        title: eventStore.event.strEvent,
        disabled: true,
        href: '',
      },
    ];
  });

</script>

<style scoped>

</style>
