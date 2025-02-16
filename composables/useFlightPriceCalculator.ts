export function useFlightPriceCalculator() {
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

    return Math.floor(distance * tarifKm) * (returnFlight ? 2 : 1);
  };

  return { getFlightPrice };
}
