import countriesCost from "@/data/country_costs.json";
import type { BudgetType } from "~/type";

export function useBudgetCalculator() {
  const getAverageDailyCostOfCountry = (
    country: string,
    city?: string
  ): number => {
    const countryData = countriesCost.find(
      (c) => c.countryName.toLowerCase() === country.toLowerCase()
    );

    if (city) {
      const cityData = countryData?.cities.find((c) => c.cityName === city);
      return parseInt(cityData?.cityData?.averageDailyCost ?? "0", 10);
    } else {
      if (!countryData || countryData.cities.length === 0) {
        return parseInt(countryData?.countryValue ?? "0", 10);
      }

      const dailyCosts = countryData.cities.map(
        (c) => c.cityData?.averageDailyCost ?? "0"
      );
      const sum = dailyCosts.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

      return sum / dailyCosts.length;
    }
  };

  const getDailyCostOfDestinationByBudget = (
    country: string,
    budget: BudgetType,
    city?: string
  ) => {
    const countryData = countriesCost.find(
      (c) => c.countryName.toLowerCase() === country.toLowerCase()
    );

    if (city) {
      const cityData = countryData?.cities.find(
        (c) => c.cityName === city
      )?.cityData;
      return cityData ? getDailyCostByBudget(cityData, budget) : 0;
    } else {
      return getDailyCostByBudget(countryData?.countryValues, budget);
    }
  };

  const getDailyCostByBudget = (data: any, budget: BudgetType) => {
    if (!data) return 0;
    return Object.keys(data).reduce((acc: number, category) => {
      if (category === "averageDailyCost") return acc;

      const categoryData = data[category as keyof typeof data];
      return (
        acc +
        parseInt(
          categoryData[budget.toLowerCase() as keyof typeof categoryData],
          10
        )
      );
    }, 0);
  };

  const getTotalSum = (
    dailyCost: number,
    days: number,
    people: number,
    flightPrice?: number
  ) => {
    return dailyCost * days * people + (flightPrice ?? 0);
  };

  return {
    getAverageDailyCostOfCountry,
    getDailyCostOfDestinationByBudget,
    getDailyCostByBudget,
    getTotalSum,
  };
}
