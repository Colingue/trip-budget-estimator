<template>
  <div class="form-group" :class="{ disabled: !cities.length }">
    <Select
      id="destinationCity"
      :label="label"
      v-model:model-value="selectedCity"
      :options="cities"
      placeholder="Select a city"
    ></Select>
  </div>
</template>

<script lang="tsx" setup>
import Select from "../../elements/Select.vue";
defineProps({
  cities: {
    type: Array<string>,
    default: () => [],
  },
  label: String,
});

const selectedCity = defineModel("selectedCity", {
  type: String,
});
</script>

<style>
.disabled {
  opacity: 0.5;
}
</style>
