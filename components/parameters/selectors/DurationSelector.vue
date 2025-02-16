<template>
  <div class="form-group">
    <InputNumber
      id="numberOfDays"
      label="Number of Days"
      v-model:modelValue="numberOfDays"
      placeholder="Enter the number of days"
      required
      :min="1"
      :default-value="1"
      :error-message="errorMessage"
    />

    <div class="additional-info">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />
      </svg>

      <p>(= {{ numberOfDays - 1 }} nights)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputNumber from "../../elements/InputNumber.vue";

const numberOfDays = defineModel("numberOfDays", {
  type: Number,
  required: true,
  validator: (value: number) => value > 0,
});

defineProps(["errorMessage"]);
</script>

<style lang="scss">
.additional-info {
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
    fill: rgb(149, 165, 159);
  }
}
</style>
