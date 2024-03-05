import { defineStore } from "pinia";
import { getTeamDetails } from "../services/teamService";

export const useTeamStore = defineStore('team', {
    state: (): {
        team: Team,
    } => ({
        team: {} as Team,
    }),
    actions: {
        async getTeamDetails(id: string) {
            try {
                this.team = await getTeamDetails(id);
            } catch (err: Error) {
                console.error(err);
            }
        }
    }
});
