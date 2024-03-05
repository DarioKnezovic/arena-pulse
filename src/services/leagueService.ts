import axios from "../plugins/axios";

export const getAllLeagues = async (): Promise<League[]> => {
  try {
      const response = await axios.get('/api/v1/json/60130162/all_leagues.php');
      return response.data.leagues;
  } catch (err: Error) {
      console.error(err);
      throw err;
  }
};
