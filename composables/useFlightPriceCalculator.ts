import { useCurrencyStore } from "~/store/currencyStore";

export function useFlightPriceCalculator(
  departureCity?: string,
  destinationCity?: string
) {
  const getFlightPrice = (
    departureCity: string,
    destinationCity: string,
    returnFlight: boolean
  ): number => {
    const distance = getDistanceBetweenCities(departureCity, destinationCity);

    let tarifKm = 0.1;

    if (distance <= 1000) {
      tarifKm *= 0.9;
    } else if (distance <= 3000) {
      tarifKm *= 0.8;
    } else {
      tarifKm *= 0.7;
    }

    return Math.round(distance * tarifKm * (returnFlight ? 2 : 1));
  };

  const flightPrice = computed(() => {
    if (!departureCity || !destinationCity) return 0;
    return getFlightPrice(departureCity, destinationCity, true);
  });

  return { getFlightPrice, flightPrice };
}
