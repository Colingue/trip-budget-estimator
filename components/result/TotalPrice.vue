<template>
  <div class="total-price">
    <p class="title">
      Total
      <span class="currency" @click="openCurrencyModal"
        >({{ store.currency.code }})</span
      >
    </p>

    <div class="total-price-value-container">
      <p class="value">{{ totalPrice }} {{ store.currency.symbol }}</p>
      <!-- <p class="daily-cost">
        Daily on-site cost: {{ dailyCost }} {{ store.currency.symbol }}
      </p> -->
    </div>
  </div>
  <Modal :show="showCurrencyModal" @close="closeModal" title="Change currency">
    <div
      class="currency-item"
      v-for="currency in currencies"
      :key="currency.code"
    >
      <button @click="changeCurrency(currency)">
        {{ currency.name }} -
        {{ currency.symbol }}
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { store } from "../../store";
import Modal from "../elements/Modal.vue";
import { currencies } from "../../data/currencies";
import type { CurrencyData } from "../../type";
import { useCurrencyStore } from "~/store/currencyStore";

defineProps<{
  totalPrice: number;
  dailyCost: number;
}>();

const store = useCurrencyStore();

const showCurrencyModal = ref(false);

const closeModal = () => {
  showCurrencyModal.value = false;
};
const openCurrencyModal = () => {
  showCurrencyModal.value = true;
};

const changeCurrency = (currency: CurrencyData) => {
  store.setCurrency(currency);
  closeModal();
};

// Placeholder for the modal logic
</script>

<style scoped>
.total-price {
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .currency {
    text-decoration: underline;
    cursor: pointer;
  }

  .total-price-value-container {
    margin-top: 8px;
    text-align: end;

    .value {
      font-size: 40px;
      font-weight: bold;
      margin: 0;
    }

    .daily-cost {
      margin: 0;
      font-size: 16px;
    }
  }
}

.currency-item {
  border-bottom: 1px solid #e0e0e0;

  button {
    background-color: transparent;
    width: 100%;
    justify-content: flex-start !important;
    margin: 10px 0px !important;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
