<template>
  <h1>Teams</h1>

  <v-row class="mt-3">
    <v-col cols="6">
      <v-select
        label="Countries"
        v-model="filters.country"
        @update:modelValue="getTeamsUsingFilters"
        :items="countryStore.countries?.map(country => country.name_en)"
      >
      </v-select>
    </v-col>
    <v-col cols="6">
      <v-select
        label="Sports"
        v-model="filters.sport"
        @update:modelValue="getTeamsUsingFilters"
        :items="sportStore.sports?.map(sport => sport.strSport)">
      </v-select>
    </v-col>
  </v-row>

  <v-data-table
    :headers="headers"
    :items="teamStore.teams"
    item-key="idTeam"
    no-data-text="No data or you have to use both filter to get data"
    @click:row="onRowClick"
  />
</template>

<script setup lang="ts">
  import { useCountryStore } from "../../stores/country";
  import { useSportStore } from "../../stores/sport";
  import { useTeamStore } from "../../stores/team";
  import { onMounted, ref } from "vue";
  import router from "../../router";

  const countryStore = useCountryStore();
  const sportStore = useSportStore();
  const teamStore = useTeamStore();

  const filters = ref({
    country: '',
    sport: '',
  });

  const headers = [
    { text: 'Team Name', value: 'strTeam' },
    { text: 'Short Name', value: 'strTeamShort' },
    { text: 'Founded Year', value: 'intFormedYear' },
    { text: 'Sport Type', value: 'strSport' },
    { text: 'League', value: 'strLeague' },
    { text: 'Stadium', value: 'strStadium' },
    { text: 'Stadium Capacity', value: 'intStadiumCapacity' },
  ];

  const onRowClick = (_, row) => {
    router.push({ name: 'teamDetails', params: { id: row.item.idTeam } });
  };
  const getTeamsUsingFilters = async () => {
    await teamStore.getTeams({
      sport: filters.value.sport,
      country: filters.value.country,
    });
  };

  onMounted(async () => {
    await countryStore.init();
    await sportStore.init();
    await getTeamsUsingFilters();
  });
</script>

<style scoped>

</style>
