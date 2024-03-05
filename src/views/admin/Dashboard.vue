<template>
  <h1>Latest events</h1>

  <v-row>
    <v-col cols="6">
      <v-select
          label="Leagues"
          v-model="filters.leagues"
          @update:modelValue="fetchEvents"
          :items="leagueStore.leagues?.map(country => country.strLeague)"
      ></v-select>
    </v-col>
    <v-col cols="6">
      <v-select
          label="Sports"
          v-model="filters.sport"
          @update:modelValue="fetchEvents"
          :items="sportStore.sports?.map(sport => sport.strSport)"
      ></v-select>
    </v-col>
  </v-row>
  <v-data-table
      :items="eventStore.events"
      :headers="tableHeaders"
      item-key="idEvent"
      @click:row="onRowClick"
  />
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useEventStore } from "../../stores/event";
  import { useSportStore } from "../../stores/sport";
  import { useLeagueStore } from "../../stores/league";
  import { useRouter } from "vue-router";

  const eventStore = useEventStore();
  const leagueStore = useLeagueStore();
  const sportStore = useSportStore();
  const router = useRouter();

  const filters = ref({
    date: new Date(),
    leagues: '',
    sport: '',
  });

  const onRowClick = (_, row) => {
    router.push({ name: 'singleEvent', params: { id: row.item.idEvent } });
  };

  const tableHeaders = [
    {
      title: "Date",
      key: "strTimeLocal",
    },
    {
      title: "Match",
      key: "match",
      value: item => `${item.strHomeTeam} - ${item.strAwayTeam}`
    },
    {
      title: "Result",
      key: "result",
      value: item =>
        item.intHomeScore && item.intAwayScore ?
          `${item.intHomeScore}:${item.intAwayScore}` : ''
    },
    {
      title: "Sport",
      value: "strSport"
    },
    {
      title: "Country",
      value: "strCountry"
    },
    {
      title: "League",
      value: "strLeague"
    }
  ];

  const fetchEvents = async () => {
    await eventStore.getAllEvents({
      date: filters.value.date,
      sport: filters.value.sport,
      leagues: filters.value.leagues,
    });
  };

  onMounted(async () => {
    await leagueStore.init();
    await sportStore.init();
    await fetchEvents();
  });

</script>

<style scoped></style>
