import { defineStore } from "pinia";
import { getAllSports } from "../services/sportService";

export const useSportStore = defineStore('sport', {
    state: (): {
       sports: Sport[],
    } => ({
       sports: [],
    }),
    actions: {
       async getAllSports() {
            this.sports = await getAllSports();
       },
        async init() {
           if (this.sports.length === 0) {
               await this.getAllSports();
           }
        }
    }
});
