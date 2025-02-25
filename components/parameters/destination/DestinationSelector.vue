<template>
  <div class="form-group-line">
    <CountrySelector
      v-model:selectedCountry="selectedCountry"
      :update-cities="updateCities"
      :label="labelCountry"
      :errorMessage="errorMessage"
    />
    <CitySelector
      v-model:selectedCity="selectedCity"
      :cities="cities"
      :label="labelCity"
    />
  </div>
</template>
<script setup lang="ts">
import CountrySelector from "./CountrySelector.vue";
import countryCosts from "../../../data/country_costs.json";
import { ref, watch } from "vue";
import CitySelector from "./CitySelector.vue";

defineProps(["labelCountry", "labelCity", "errorMessage"]);

const cities = ref<string[]>([]);

const selectedCountry = defineModel("selectedCountry", {
  type: String,
});

const selectedCity = defineModel("selectedCity", {
  type: String,
});

// const emit = defineEmits(["update:selectedCountry", "update:selectedCity"]);

const getCities = (country: string) => {
  const countryData = countryCosts.find(
    (countryData) => countryData.countryName === country
  );
  return countryData?.cities;
};

const updateCities = () => {
  const selected = selectedCountry.value?.toLowerCase();

  if (!selected) {
    cities.value = [];
    return;
  }
  const citiesData = getCities(selected);

  if (cities) {
    cities.value = citiesData?.map((city) => city.cityName) ?? [];
  }
};

watch(selectedCountry, () => {
  selectedCity.value = "";
  updateCities();
});

watch(cities, () => {
  if (cities.value.length) {
    selectedCity.value = "";
  }
});
</script>
