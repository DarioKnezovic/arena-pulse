import { defineStore } from "pinia";
import { getAllEvents, getSingleEvent } from "../services/eventService";
import type { Event } from "../interfaces/models/Event";
import type { GetAllEventsParams } from "../interfaces/event";
import { formatDate, replaceWhitespace } from "../utils";

export const useEventStore = defineStore('event', {
   state: (): {
      events: Event[],
      event: Event,
      loading: Boolean,
   } => ({
      events: [],
      event: {},
      loading: false,
   }),
   actions: {
      async getAllEvents(params: GetAllEventsParams) {
         try {
            let paramsList = `?d=${formatDate(params.date)}`;

            if (params.leagues) {
               paramsList += `&l=${replaceWhitespace(params.leagues)}`;
            }

            if (params.sport) {
               paramsList += `&s=${replaceWhitespace(params.sport)}`;
            }

            this.events = await getAllEvents(paramsList);
         } catch (err: Error) {
            console.error(err);
         }
      },
      async getSingleEvent(id: string) {
         try {
            this.event = await getSingleEvent(id);
         } catch (err: Error) {
            console.error(err);
         }
      }
   }
});
