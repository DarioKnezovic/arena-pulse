import axios from '../plugins/axios';

export const getAllCountries = async (): Promise<Country[]> => {
    try {
        const response = await axios.get('/api/v1/json/60130162/all_countries.php');
        return response.data.countries;
    } catch (err: Error) {
        console.error(err);
        throw err;
    }
};
