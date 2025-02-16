import type { Coordinates } from "../type";

import citiesCoordinates from "../data/cities_coordinates.json";

export const getCoordinatesByCity = (city: string): Coordinates => {
  const cityCoordinates = citiesCoordinates.find(
    (cityData) => cityData.cityName === city
  );

  if (!cityCoordinates) {
    throw new Error("City not found");
  }

  return {
    lat: cityCoordinates.latitude,
    lng: cityCoordinates.longitude,
  };
};

export const getDistanceBetweenCities = (
  city1: string,
  city2: string
): number => {
  const city1Coordinates = getCoordinatesByCity(city1);
  const city2Coordinates = getCoordinatesByCity(city2);

  const R = 6371e3; // metres
  const φ1 = (city1Coordinates.lat * Math.PI) / 180; // φ, λ in radians
  const φ2 = (city2Coordinates.lat * Math.PI) / 180;
  const Δφ = ((city2Coordinates.lat - city1Coordinates.lat) * Math.PI) / 180;
  const Δλ = ((city2Coordinates.lng - city1Coordinates.lng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // in km
  return (R * c) / 1000;
};
