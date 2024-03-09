import axios from "../plugins/axios";
import { envs } from "../utils/constants/envs";

export const getTeamDetails = async (id: string): Promise<Team> => {
    try {
        const response = await axios.get(`/api/v1/json/${envs.API_KEY}/lookupteam.php?id=${id}`);
        return response.data.teams[0];
    } catch (e: Error) {
        console.error(e);
        throw e;
    }
};

export const getTeams = async (params?: string): Promise<Team[]> => {
    try {
        const response = await axios.get(`/api/v1/json/${envs.API_KEY}/search_all_teams.php${params ?? ''}`);
        return response.data.teams;
    } catch (e: Error) {
        console.error(e);
        throw e;
    }
};
