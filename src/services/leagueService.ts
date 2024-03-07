import axios from "../plugins/axios";
import { envs } from "../utils/constants/envs";

export const getAllLeagues = async (): Promise<League[]> => {
  try {
      const response = await axios.get(`/api/v1/json/${envs.API_KEY}/all_leagues.php`);
      return response.data.leagues;
  } catch (err: Error) {
      console.error(err);
      throw err;
  }
};

export const getLeagueById = async (id: string): Promise<League> => {
  try {
      const response = await axios.get(`/api/v1/json/${envs.API_KEY}/lookupleague.php?id=${id}`);
      return response.data.leagues[0];
  } catch (err: Error) {
      console.error(err);
      throw err;
  }
};
