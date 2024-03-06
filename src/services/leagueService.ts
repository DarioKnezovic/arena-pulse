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
