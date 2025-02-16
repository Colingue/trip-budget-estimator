<template>
  <div class="form-group">
    <label for="currency">Choose Currency: </label>
    <select id="currency" required v-model="currency">
      <option v-for="currency in currencies" :value="currency.code">
        {{ currency.name }} ({{ currency.symbol }})
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { currencies } from "./../../../data/currencies";

const currency = defineModel("currency", {
  type: String,
});
</script>
