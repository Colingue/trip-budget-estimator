<template>
  <div class="form-group">
    <InputNumber
      label="Number of travelers"
      id="numberOfPeople"
      v-model:model-value="numberOfPeople"
      placeholder="Enter the number of people"
      required
      :min="1"
      :default-value="1"
    />
  </div>
</template>

<script setup lang="ts">
import InputNumber from "../../elements/InputNumber.vue";

const numberOfPeople = defineModel("numberOfPeople", {
  type: Number,
  required: true,
  validator: (value: number) => value > 0,
});
</script>
