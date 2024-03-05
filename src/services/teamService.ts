import axios from "../plugins/axios";

export const getTeamDetails = async (id: string): Promise<Team> => {
    try {
        const response = await axios.get(`/api/v1/json/60130162/lookupteam.php?id=${id}`);
        return response.data.teams[0];
    } catch (e: Error) {
        console.error(e);
        throw e;
    }
};
