import axios from '../plugins/axios';
import { envs } from "../utils/constants/envs";

export const getAllCountries = async (): Promise<Country[]> => {
    try {
        const response = await axios.get(`/api/v1/json/${envs.API_KEY}/all_countries.php`);
        return response.data.countries;
    } catch (err: Error) {
        console.error(err);
        throw err;
    }
};
