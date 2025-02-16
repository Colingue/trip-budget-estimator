<template>
  <FlightDetails
    :departureCity="formData.departureCity"
    :flightCost="flightPrice"
    :number-of-people="formData.numberOfPeople"
    :destination-city="formData.destinationCity"
    v-if="formData.includeFlight && formData.departureCity"
  />

  <!-- <div class="divider-y" v-if="store.flightPrice"></div> -->

  <PriceDetails
    :number-of-days="formData.numberOfDays"
    :number-of-people="formData.numberOfPeople"
    :daily-cost="dailyCost"
    :flight-price="props.flightPrice"
  />

  <!-- <div class="divider-y"></div> -->

  <TotalPrice :total-price="totalPrice" :daily-cost="dailyCost" />
</template>

<script lang="ts" setup>
import type { FormDataBudget } from "../../type";

import FlightDetails from "./FlightDetails.vue";
import PriceDetails from "./PriceDetails.vue";
import TotalPrice from "./TotalPrice.vue";

const props = defineProps<{
  formData: FormDataBudget;
  flightPrice: number;
  totalPrice: number;
  dailyCost: number;
}>();
</script>

<style lang="css">
.budget-details-list {
  padding-inline-start: 0;
}

.budget-details-list li {
  display: flex;
}
</style>
