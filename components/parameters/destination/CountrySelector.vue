<template>
  <div class="form-group">
    <!-- <Select
      id="destinationCountry"
      required
      v-model="selectedCountry"
      @change="updateCities"
      placeholder="Select a country"
      :options="
        countries.map(
          (country) =>
            country.countryName.charAt(0).toUpperCase() +
            country.countryName.slice(1)
        )
      "
      :label="label"
      :error-message="errorMessage"
    ></Select> -->
    <SelectSearchable
      v-model="selectedCountry"
      :options="countries.map((country) => country.countryName)"
      :label="label"
      placeholder="Select a country"
    ></SelectSearchable>
  </div>
</template>

<script lang="tsx" setup>
import SelectSearchable from "~/components/elements/SelectSearchable.vue";
import countries from "../../../data/country_costs.json";
import Select from "../../elements/Select.vue";

const selectedCountry = defineModel("selectedCountry", {
  type: String,
});

defineProps(["updateCities", "label", "errorMessage"]);
</script>
