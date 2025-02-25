<template>
  <div class="flex flex-col mb-32 lg:max-w-5xl lg:mx-auto">
    <h2 class="text-4xl font-bold dark:text-white mb-4">
      How Does the Budget Calculator Work?
    </h2>

    <nav class="article-nav">
      <ul>
        <li
          @click="activeSection = 'how-it-works'"
          :class="{ active: activeSection === 'how-it-works' }"
        >
          <a href="#how-it-works">How It Works</a>
        </li>
        <li
          @click="activeSection = 'interpretation'"
          :class="{ active: activeSection === 'interpretation' }"
        >
          <a href="#interpretation">Interpretation</a>
        </li>
      </ul>
    </nav>

    <article>
      <section id="how-it-works" class="mb-16">
        <h3 class="text-3xl font-semibold dark:text-white mb-4">
          How Does the Budget Calculator Work?
        </h3>
        <p>
          To use the <b>Travel budget calculator</b> for a trip, fill out the
          form with your criteria (number of days, number of travelers,
          destination country, destination city, currency, budget, flight
          inclusion, departure city). Then, click the
          <b>"Estimate my trip"</b> button to get an estimation of your trip's
          total cost.
        </p>
      </section>

      <section id="interpretation">
        <h3 class="text-3xl font-semibold dark:text-white mb-4">
          How to Interpret the Travel Budget Calculator Results?
        </h3>
        <p>
          The budget calculator results are estimated based on data collected
          from over
          <b>150 destinations</b> worldwide. Once the results are displayed, you
          can view the breakdown of your calculation with the criteria you
          provided. If you included a flight, you will see the
          <b>flight cost</b> (round trip) for all passengers, as well as the
          price per person. Below that, you will find the
          <b>total on-site cost</b> of your trip and the <b>total trip cost</b>.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeSection = ref("how-it-works");
</script>

<style lang="scss">
.explication-container {
  margin: 0 2rem 4rem 2rem;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 2rem;
    margin: 0 4rem 4rem 4rem;
  }
}
.article-nav {
  @media screen and (min-width: 768px) {
    flex: 1;
    position: sticky;
  }
  ul {
    gap: 2rem;
    list-style: none;
    padding-inline-start: 0;
    margin-bottom: 2rem;

    li {
      padding: 20px;
      border-left: 2px solid rgb(235, 235, 235);
      a {
        text-decoration: none;
        color: #000;
        font-weight: 400;
        font-size: 1rem;
      }

      &.active {
        font-weight: 600;
        border-left: 2px solid #333333;
      }
    }
  }
}
</style>
