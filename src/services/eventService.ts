import axios from '../plugins/axios';
import type { Event } from "../interfaces/models/Event";
import { envs } from "../utils/constants/envs";

export const getAllEvents = async (params: string): Promise<Event[]> => {
    try {
        const response = await axios.get(`api/v1/json/${envs.API_KEY}/eventsday.php${params}`);
        return response.data.events;
    } catch (err: Error) {
        console.error(err);
        throw err;
    }
};

export const getSingleEvent = async (id: string): Promise<Event> => {
    try {
        const response = await axios.get(`/api/v1/json/${envs.API_KEY}/lookupevent.php?id=${id}`);
        return response.data.events[0];
    } catch (err: Error) {
        console.error(err);
        throw err;
    }
};
