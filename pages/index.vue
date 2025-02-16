<script lang="ts" setup>
import { ref } from "vue";

import HeroBanner from "~/components/elements/HeroBanner.vue";
import Explication from "~/components/articles/Explication.vue";
import BudgetForm from "~/components/parameters/BudgetForm.vue";
import type { FormDataBudget } from "~/type";

const router = useRouter();

const formData = ref<FormDataBudget>({
  numberOfDays: 1,
  numberOfPeople: 1,
  destinationCountry: "",
  destinationCity: "",
  budget: "Budget",
  includeFlight: false,
  departureCity: "",
});

const onSubmit = () => {
  router.push({
    name: "results",
    query: {
      ...formData.value,
      includeFlight: formData.value.includeFlight.toString(),
    },
  });
};
</script>

<template>
  <HeroBanner />

  <img
    src="./../assets/hero_bg_mobile.webp"
    alt="hero background"
    class="hero-bg mobile"
  />
  <img
    srcset="
      ./../assets/hero_bg_desktop.webp 1140w,
      ./../assets/hero_bg_xl.webp      1920w
    "
    alt="hero background"
    class="hero-bg desktop"
  />

  <BudgetForm :formData="formData" v-on:submit="onSubmit" />
  <!-- <BudgetContainer /> -->
  <Explication />
</template>

<style lang="scss">
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &.mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &.mobile {
      display: block;
    }

    &.desktop {
      display: none;
    }
  }
}
</style>
