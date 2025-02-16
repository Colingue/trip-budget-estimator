<template>
  <div class="budget-container">
    <form
      @submit.prevent="handleSubmit"
      :onkeydown="keyIsEnter"
      id="estimation-form"
    >
      <h2>Configure your trip</h2>

      <FormContainer label="Destination" emoji="🌍">
        <DestinationSelector
          v-model:selectedCountry="formData.destinationCountry"
          v-model:selectedCity="formData.destinationCity"
          label-city="City"
          label-country="Country"
        />
      </FormContainer>

      <div class="divider-y"></div>

      <FormContainer label="Duration" emoji="🕦">
        <DurationSelector v-model:number-of-days="formData.numberOfDays" />
      </FormContainer>
      <div class="divider-y"></div>

      <FormContainer label="Number of People" emoji="👨‍👩">
        <PeopleSelector v-model:number-of-people="formData.numberOfPeople" />
      </FormContainer>
      <div class="divider-y"></div>

      <FormContainer label="Budget" emoji="💰">
        <ComfortSelector v-model:budget="formData.budget" />
      </FormContainer>
      <div class="divider-y"></div>

      <FormContainer label="Transport" emoji="✈️">
        <TransportSelector
          v-model:transport-included="formData.includeFlight"
          v-model:departure-city="formData.departureCity"
        />
      </FormContainer>
      <input type="submit" class="btn btn-primary" value="Estimate my trip" />
      <ModalLoading v-if="showModal">
        <AnimationLoader />
        <h2>Calculating your trip...</h2>
        <p>
          Please wait a few seconds while we calculate the best trip for you.
        </p>
      </ModalLoading>
    </form>
    <p class="disclaimer">
      The Travel Budget Calculator is provided for information purposes only and
      generates a cost estimate. It is an approximation.
    </p>
  </div>
</template>

<script setup lang="ts">
import PeopleSelector from "./selectors/PeopleSelector.vue";
import DurationSelector from "./selectors/DurationSelector.vue";
import ComfortSelector from "./selectors/ComfortSelector.vue";
import DestinationSelector from "./destination/DestinationSelector.vue";
import TransportSelector from "./selectors/TransportSelector.vue";
import FormContainer from "../elements/FormContainer.vue";
import { ref } from "vue";
import AnimationLoader from "../elements/AnimationLoader.vue";
import ModalLoading from "../elements/ModalLoading.vue";

const props = defineProps(["onSubmit", "formData"]);

const showModal = ref(false);

const handleSubmit = () => {
  showModal.value = true;
  setTimeout(() => {
    showModal.value = false;

    props.onSubmit();
  }, 3000);
};

const keyIsEnter = (event: KeyboardEvent) => {
  return event.key !== "Enter";
};
</script>

<style lang="scss">
form {
  background-color: white;
  border: rgb(228, 238, 245) 2px solid;
  border-radius: 10px;
  box-shadow: #aeaeae40 0px 0px 40px;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .form-group-line {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex: 2;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex: 2;

    .description {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 14px;
      color: #666;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }
  }
  .btn {
    margin-top: 40px;
  }
}
</style>
