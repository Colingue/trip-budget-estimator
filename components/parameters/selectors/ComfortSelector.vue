<template>
  <div class="form-group">
    <Select
      label="Travel Type"
      id="budget"
      v-model:model-value="budget"
      :options="['Ultracheap', 'Budget', 'Midrange', 'Luxury']"
      default-value="Budget"
      description="Includes accommodation, meals, local transportation, and activities."
    ></Select>

    <ComfortInfosCard />
  </div>
</template>

<script setup lang="ts">
import ComfortInfosCard from "../ComfortInfosCard.vue";
import Select from "./../../elements/Select.vue";

const budget = defineModel("budget", {
  type: String,
  default: "budget",
});
</script>
