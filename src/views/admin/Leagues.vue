<template>
  <h1>All leagues</h1>

  <v-row class="mt-3">
    <v-col cols="6">
      <v-select
        label="Sports"
        v-model="sportFilter"
        :items="sportStore.sports?.map(sport => sport.strSport)"
      ></v-select>
    </v-col>
  </v-row>
  <v-data-table
      :headers="tableHeaders"
      :items="filteredLeagues"
      item-key="idLeague"
      class="elevation-1"
      @click:row="onRowClick"
  />
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from "vue";
  import { useLeagueStore } from "../../stores/league";
  import { useSportStore } from "../../stores/sport";
  import { useRouter } from "vue-router";

  const leagueStore = useLeagueStore();
  const sportStore = useSportStore();
  const router = useRouter();

  const onRowClick = (_, row) => {
    router.push({ name: 'league', params: { id: row.item.idLeague } });
  };

  const sportFilter = ref(null);
  const tableHeaders = [
    { title: 'League ID', key: 'idLeague' },
    { title: 'League Name', key: 'strLeague' },
    { title: 'Sport', key: 'strSport' },
    { title: 'Alternate Names', key: 'strLeagueAlternate' },
  ];

  const filteredLeagues = computed(() => {
    return sportFilter.value ? leagueStore.leagues.filter(league => league.strSport === sportFilter.value) : leagueStore.leagues;
  });

  onMounted(async () => {
    await leagueStore.init();
    await sportStore.init();
  });
</script>

<style scoped>

</style>
