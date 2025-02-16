<template>
  <div class="price-details">
    <h3>Price Details</h3>
    <ul class="list">
      <li>
        <div>
          <p>Total on-site cost</p>
          <p>Included : transportation, accommodation, food, and activities</p>
        </div>
        <p>
          <!-- {{ numberOfDays * numberOfPeople * dailyCost }}
          {{ store.currency.symbol }} ({{ numberOfDays }} -->
          <!-- days * -->
          {{ dailyCost * numberOfPeople * numberOfDays }}
          {{ store.currency.symbol }}
        </p>
      </li>
      <!-- <li v-if="flightPrice">
        <p>Total flight price:</p>
        <p>
          {{ flightPrice * numberOfPeople }}
          {{ store.currency.symbol }}
        </p>
      </li> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCurrencyStore } from "~/store/currencyStore";

defineProps<{
  dailyCost: number;
  flightPrice: number;
  numberOfDays: number;
  numberOfPeople: number;
}>();

const store = useCurrencyStore();
</script>

<style scoped>
.price-details {
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
  }

  .list {
    padding-inline-start: 0;
    list-style: none;

    li {
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;

      & > p {
        white-space: nowrap;
      }

      div {
        p:last-child {
          color: rgb(106, 106, 106);
          font-size: 0.9rem;
          margin-right: 30px;
        }
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
