import axios from '../plugins/axios';
import { envs } from "../utils/constants/envs";

export const getAllSports = async (): Promise<Sport[]> => {
    try {
        const response = await axios.get(`/api/v1/json/${envs.API_KEY}/all_sports.php`);
        return response.data.sports;
    } catch (err: Error) {
        console.error(err);
        throw err;
    }
};
