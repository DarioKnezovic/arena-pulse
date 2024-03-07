import { defineStore } from "pinia";
import { getAllLeagues, getLeagueById } from "../services/leagueService";
import type { League } from "../interfaces/models/Event";

export const useLeagueStore = defineStore('league', {
    state: (): {
        leagues: League[],
        league: League,
    } => ({
        leagues: [],
        league: {},
    }),
    actions: {
        async getAllLeagues() {
            this.leagues = await getAllLeagues();
        },
        async getLeagueById(id: string) {
            this.league = await getLeagueById(id);
        },
        async init() {
            if (this.leagues.length === 0) {
                await this.getAllLeagues();
            }
        }
    }
});
