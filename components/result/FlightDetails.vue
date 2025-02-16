<template>
  <div class="flight-details">
    <h3>Flight price</h3>

    <div class="route">
      <p>{{ departureCity }}</p>
      <div class="line"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
        />
      </svg>
      <div class="line"></div>
      <p>{{ destinationCity }}</p>
    </div>

    <ul class="list">
      <li>
        <div>
          <p>Flight cost for {{ numberOfPeople }} people (return trip)</p>
        </div>
        <p>{{ flightCost * numberOfPeople }} {{ store.currency.symbol }}</p>
      </li>
      <li class="sub-li" v-if="numberOfPeople > 1">
        <div>
          <p>Flight cost for 1 person</p>
        </div>
        <p>
          {{ flightCost }}
          {{ store.currency.symbol }}
        </p>
      </li>
      <!-- <li>
        <p>Included:</p>
        <p>Round-trip tickets for {{ numberOfPeople }} people</p>
      </li> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCurrencyStore } from "~/store/currencyStore";

defineProps<{
  departureCity: string;
  flightCost: number;
  numberOfPeople: number;
  destinationCity?: string;
}>();

const store = useCurrencyStore();
</script>

<style scoped>
.flight-details {
  /* margin-top: 20px; */

  h3 {
    margin-bottom: 10px;
  }

  .route {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      fill: #888c8b;
    }

    .line {
      flex: 1;
      width: 100%;
      height: 2px;
      background-color: #dbdbdb;
      margin: 0 10px;
    }
  }

  .list {
    padding-inline-start: 0;
    list-style: none;
    margin: 0;

    .sub-li {
      color: rgb(106, 106, 106);
      font-size: 0.9rem;
    }

    /* div {
      p:last-child {
        color: rgb(106, 106, 106);
        font-size: 0.9rem;
        margin-right: 30px;
      }
    } */

    li {
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;

      p {
        margin: 0;
      }

      & > p {
        white-space: nowrap;
      }
    }
  }
}
</style>
