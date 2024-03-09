import { defineStore } from "pinia";
import { getTeamDetails, getTeams }  from "../services/teamService";

export const useTeamStore = defineStore('team', {
    state: (): {
        teams: Team[],
        team: Team,
    } => ({
        teams: [],
        team: {} as Team,
    }),
    actions: {
        async getTeamDetails(id: string) {
            try {
                this.team = await getTeamDetails(id);
            } catch (err: Error) {
                console.error(err);
            }
        },
        async getTeams(params: GetAllTeamsParams) {
            try {
                let paramsList: string,
                    paramsArray: string[] = [];

                if (params.sport) {
                    paramsArray.push(`s=${encodeURIComponent(params.sport)}`);
                }

                if (params.country) {
                    paramsArray.push(`c=${encodeURIComponent(params.country)}`);
                }

                paramsList = paramsArray.length > 0 ? '?' + paramsArray.join('&') : '';

                this.teams = await getTeams(paramsList !== "?" ? paramsList : undefined);
            } catch (err: Error) {
                console.error(err);
            }
        }
    }
});
