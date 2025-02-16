<template>
  <div class="form-group">
    <Switch
      id="transportIncluded"
      v-model:modelValue="transportIncluded"
      label="Include Flight?"
      description="Check this option to include round-trip flight costs from your departure city."
    />
    <div class="form-container" v-if="transportIncluded">
      <DestinationSelector
        v-model:selectedCity="departureCity"
        label-city="Departure City"
        label-country="Departure Country"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "../../elements/Switch.vue";
import DestinationSelector from "../destination/DestinationSelector.vue";

const transportIncluded = defineModel("transportIncluded", {
  type: Boolean,
  default: false,
});

const departureCity = defineModel("departureCity", { type: String });
</script>

<style>
.checkbox-line {
  display: flex;
  gap: 8px;

  align-items: center;
}

.checkbox-line label {
  margin: 0;
}
</style>
