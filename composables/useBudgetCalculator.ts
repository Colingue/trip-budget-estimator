import countriesCost from "@/data/country_costs.json";
import { useCurrencyStore } from "~/store/currencyStore";
import type { BudgetType, FormDataBudget, ResultRepartition } from "~/type";

type BudgetCalculator = {
  dailyCost: ComputedRef<number>;
  totalPrice: ComputedRef<number>;
  repartition: ComputedRef<ResultRepartition>;
};

export function useBudgetCalculator(
  formData: FormDataBudget
): BudgetCalculator {
  const currencyStore = useCurrencyStore();
  const code = computed(() => currencyStore.currency.code);

  const { getConvertionRate } = useConvertionCalculator();

  const rate = computed(() => getConvertionRate(code.value));

  const { flightPrice } = useFlightPriceCalculator(
    formData.departureCity,
    formData.destinationCity
  );

  // const getAverageDailyCostOfCountry = (
  //   country: string,
  //   city?: string
  // ): number => {
  //   const countryData = countriesCost.find(
  //     (c) => c.countryName.toLowerCase() === country.toLowerCase()
  //   );

  //   if (city) {
  //     const cityData = countryData?.cities.find((c) => c.cityName === city);
  //     return parseInt(cityData?.cityData?.averageDailyCost ?? "0", 10);
  //   } else {
  //     if (!countryData || countryData.cities.length === 0) {
  //       return parseInt(countryData?.countryValue ?? "0", 10);
  //     }

  //     const dailyCosts = countryData.cities.map(
  //       (c) => c.cityData?.averageDailyCost ?? "0"
  //     );
  //     const sum = dailyCosts.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  //     return sum / dailyCosts.length;
  //   }
  // };

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

  const dailyCost = computed(() =>
    Math.round(
      getDailyCostOfDestinationByBudget(
        formData.destinationCountry,
        formData.budget,
        formData.destinationCity
      ) * rate.value
    )
  );

  const totalCostOnSite = computed(() =>
    getTotalSum(dailyCost.value, formData.numberOfDays, formData.numberOfPeople)
  );

  const totalPrice = computed(
    () => totalCostOnSite.value + flightPrice.value * formData.numberOfPeople
  );

  const getRepartition = (
    country: string,
    budgetType: BudgetType,
    city?: string
  ) => {
    const countryData = countriesCost.find(
      (c) => c.countryName.toLowerCase() === country.toLowerCase()
    );

    if (city) {
      const cityData = countryData?.cities.find(
        (c) => c.cityName === city
      )?.cityData;
      return cityData
        ? getRepartitionByBudget(cityData, budgetType)
        : { accommodation: 0, food: 0, activities: 0, roundTrip: 0 };
    } else {
      return getRepartitionByBudget(countryData?.countryValues, budgetType);
    }
  };

  const getRepartitionByBudget = (data: any, budget: BudgetType) => {
    const costOfAccommodation = parseInt(
      data.accommodation[
        budget.toLowerCase() as keyof typeof data.accommodation
      ]
    );

    const costOfFood =
      parseInt(data.food[budget.toLowerCase() as keyof typeof data.food], 10) +
      parseInt(
        data.alcohol[budget.toLowerCase() as keyof typeof data.alcohol],
        10
      );

    const costOfActivities =
      parseInt(
        data.local_transportation[
          budget.toLowerCase() as keyof typeof data.transportation
        ],
        10
      ) +
      parseInt(
        data.entertainment[
          budget.toLowerCase() as keyof typeof data.entertainment
        ],
        10
      );

    return {
      accommodation: Math.round(costOfAccommodation * rate.value),
      food: Math.round(costOfFood * rate.value),
      activities: Math.round(costOfActivities * rate.value),
      roundTrip: flightPrice.value * formData.numberOfPeople,
    };
  };

  const repartition = computed(() =>
    getRepartition(
      formData.destinationCountry,
      formData.budget,
      formData.destinationCity
    )
  );

  console.log(repartition.value);
  return {
    dailyCost,
    totalPrice,
    repartition,
  };
}
