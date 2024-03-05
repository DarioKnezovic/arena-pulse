import axios from '../plugins/axios';

export const getAllSports = async (): Promise<Sport[]> => {
    try {
        const response = await axios.get('/api/v1/json/60130162/all_sports.php');
        return response.data.sports;
    } catch (err: Error) {
        console.error(err);
        throw err;
    }
};
