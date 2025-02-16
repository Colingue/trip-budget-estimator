export type FormDataBudget = {
  numberOfDays: number;
  numberOfPeople: number;
  destinationCountry: string;
  destinationCity?: string;
  budget: BudgetType;
  includeFlight: boolean;
  departureCity?: string;
};

export type CurrencyData = {
  code: string;
  name: string;
  symbol: string;
};

export type BudgetType = "Ultracheap" | "Budget" | "Midrange" | "Luxury";

export type StoreData = {
  rate: number;
  setRate(rate: number): void;
  currency: CurrencyData;
  setCurrency(currency: CurrencyData): void;
  flightPrice: number;
  setFlightPrice(price: number): void;
  dailyCost: number;
  setDailyCost(cost: number): void;
};

export type Coordinates = {
  lat: number;
  lng: number;
};
