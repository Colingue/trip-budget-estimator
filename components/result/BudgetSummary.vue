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
          :budget-type="formData.budget"
        />

        <div class="divider-y"></div>

        <BudgetDetails
          :form-data="formData"
          :flightPrice="flightPrice"
          :total-price="totalPrice"
          :dailyCost="dailyCost"
        />

        <div class="divider-y"></div>

        <Repartition :repartition="repartitions" />

        <button class="btn btn-primary" @click="share">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path
                d="M381.6,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8
		c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S429,0,381.5,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5
		l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8c-47.4,0-86.1,38.6-86.1,86.1s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9
		l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1s86.1-38.6,86.1-86.1S429.1,309.4,381.6,309.4z M381.6,27.1
		c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S349.1,27.1,381.6,27.1z M100,299.8
		c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S132.5,299.8,100,299.8z M381.6,454.5
		c-32.6,0-59.1-26.5-59.1-59.1c0-32.6,26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1C440.7,428,414.2,454.5,381.6,454.5z"
              />
            </g>
          </svg>
          <p>Share</p>
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
import type { RepartitionList } from "./Repartition.vue";
import Repartition from "./Repartition.vue";

const props = defineProps<{
  formData: FormDataBudget;
  resetForm: () => void;
}>();

const { dailyCost, totalPrice, repartition } = useBudgetCalculator(
  props.formData
);

const repartitions: RepartitionList = [
  {
    title: "Accommodation",
    amount:
      repartition.value.accommodation *
      props.formData.numberOfPeople *
      props.formData.numberOfDays,
    emoji: "🏠",
    percentage: Math.round(
      ((repartition.value.accommodation *
        props.formData.numberOfPeople *
        props.formData.numberOfDays) /
        totalPrice.value) *
        100
    ),
  },
  {
    title: "Food",
    amount:
      repartition.value.food *
      props.formData.numberOfPeople *
      props.formData.numberOfDays,
    emoji: "🍔",
    percentage: Math.round(
      ((repartition.value.food *
        props.formData.numberOfPeople *
        props.formData.numberOfDays) /
        totalPrice.value) *
        100
    ),
  },
  {
    title: "Activities",
    amount:
      repartition.value.activities *
      props.formData.numberOfPeople *
      props.formData.numberOfDays,
    emoji: "🎉",
    percentage: Math.round(
      ((repartition.value.activities *
        props.formData.numberOfPeople *
        props.formData.numberOfDays) /
        totalPrice.value) *
        100
    ),
  },
  {
    title: "Round trip",
    amount: repartition.value.roundTrip,
    emoji: "✈️",
    percentage: Math.round(
      (repartition.value.roundTrip / totalPrice.value) * 100
    ),
  },
];

const { flightPrice } = useFlightPriceCalculator(
  props.formData.departureCity,
  props.formData.destinationCity
);

const route = useRoute();

const destination = computed(() => {
  if (props.formData.destinationCity === "") {
    return props.formData.destinationCountry;
  }

  return `${props.formData.destinationCity}, ${props.formData.destinationCountry}`;
});

const share = () => {
  navigator.share({
    title: `Take a look at my estimate for a trip to ${destination.value}!`,
    text: `I estimated the cost of a trip to ${destination.value} for ${props.formData.numberOfPeople} people for ${props.formData.numberOfDays} days. Check it out!`,
    url: route.fullPath,
  });
};

// const dailyCost = computed(() =>
//   Math.round(
//     getDailyCostOfDestinationByBudget(
//       props.formData.destinationCountry,
//       props.formData.budget,
//       props.formData.destinationCity
//     ) * rate.value
//   )
// );

// const flightPrice = computed(() => {
//   if (
//     !props.formData.includeFlight ||
//     !props.formData.departureCity ||
//     !props.formData.destinationCity
//   ) {
//     return 0;
//   }

//   return Math.round(
//     getFlightPrice(
//       props.formData.departureCity,
//       props.formData.destinationCity,
//       true
//     ) * rate.value
//   );
// });

const showShareModal = ref(false);

const toggleModal = () => {
  showShareModal.value = !showShareModal.value;
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
