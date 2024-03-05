import { defineStore } from "pinia";
import { getAllLeagues } from "../services/leagueService";

export const useLeagueStore = defineStore('league', {
    state: (): {
        leagues: League[],
    } => ({
        leagues: [],
    }),
    actions: {
        async getAllLeagues() {
            this.leagues = await getAllLeagues();
        },
        async init() {
            if (this.leagues.length === 0) {
                await this.getAllLeagues();
            }
        }
    }
});
