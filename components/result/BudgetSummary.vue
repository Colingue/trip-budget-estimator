<template>
  <div class="budget-container">
    <div class="budget-result-container">
      <h2>Your Trip Estimation</h2>

      <div class="budget-result">
        <ResultDetailCard
          :destination="destination"
          :numberOfDays="formData.numberOfDays"
          :number-of-people="formData.numberOfPeople"
          :flightIncluded="formData.includeFlight"
        />

        <div class="divider-y"></div>

        <BudgetDetails
          :form-data="formData"
          :flightPrice="flightPrice"
          :total-price="totalPrice"
          :dailyCost="dailyCost"
        />

        <button class="btn btn-primary" @click="copyLink">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"
            />
          </svg>
          <p>Copy details</p>
        </button>

        <button class="btn btn-secondary" v-on:click="resetForm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"
            />
          </svg>
          Reset form
        </button>
      </div>
    </div>
    <p class="disclaimer">
      The Travel Budget Calculator is provided for information purposes only and
      generates a cost estimate. It is an approximation.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import type { FormDataBudget } from "../../type";
import BudgetDetails from "./BudgetDetails.vue";
import ResultDetailCard from "./ResultDetailCard.vue";
import { useCurrencyStore } from "~/store/currencyStore";

const props = defineProps<{
  formData: FormDataBudget;
  resetForm: () => void;
}>();

const { getDailyCostOfDestinationByBudget, getTotalSum } =
  useBudgetCalculator();
const { getFlightPrice } = useFlightPriceCalculator();
const { getConvertionRate } = useConvertionCalculator();

const currencyStore = useCurrencyStore();
const code = computed(() => currencyStore.currency.code);

const rate = computed(() => getConvertionRate(code.value));

const route = useRoute();
const url = `${window.location.origin}${route.fullPath}`;

const dailyCost = computed(() =>
  Math.round(
    getDailyCostOfDestinationByBudget(
      props.formData.destinationCountry,
      props.formData.budget,
      props.formData.destinationCity
    ) * rate.value
  )
);

const flightPrice = computed(() => {
  if (
    !props.formData.includeFlight ||
    !props.formData.departureCity ||
    !props.formData.destinationCity
  ) {
    return 0;
  }

  return Math.round(
    getFlightPrice(
      props.formData.departureCity,
      props.formData.destinationCity,
      true
    ) * rate.value
  );
});

const destination = computed(() => {
  if (props.formData.destinationCity === "") {
    return props.formData.destinationCountry;
  }

  return `${props.formData.destinationCity}, ${props.formData.destinationCountry}`;
});

const totalPrice = computed(() =>
  Math.round(
    getTotalSum(
      dailyCost.value,
      props.formData.numberOfDays,
      props.formData.numberOfPeople,
      flightPrice.value * props.formData.numberOfPeople
    )
  )
);

const copyLink = () => {
  navigator.clipboard.writeText(url);
};
</script>

<style lang="scss">
.budget-result-container {
  flex: 1;
  padding: 30px;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: rgb(236, 243, 248) 2px solid;
  border-radius: 10px;
  box-shadow: #aeaeae40 0px 0px 40px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .budget-result {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

.budget-result .total {
  font-size: 2rem;
  font-weight: 700;
}

.budget-total {
  border-bottom: 2px solid #ccc;
  padding-bottom: 20px;
}
</style>
