import type { CurrencyData } from "~/type";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
  }),
  actions: {
    setCurrency(currency: CurrencyData) {
      this.currency = currency;
    },
  },
});
