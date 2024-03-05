import { defineStore } from "pinia";
import { getAllCountries } from "../services/countryService";

export const useCountryStore = defineStore('country', {
    state: (): {
        countries: Country[],
    } => ({
        countries: [],
    }),
    actions: {
        async getAllCountries() {
            this.countries = await getAllCountries();
        },
        async init() {
            if (this.countries.length === 0) {
                await this.getAllCountries();
            }
        }
    }
});
