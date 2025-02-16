<template>
  <BudgetSummary :form-data="formData" :reset-form="goToForm" />
  <Explication />
</template>

<script lang="ts" setup>
import Explication from "~/components/articles/Explication.vue";
import BudgetSummary from "~/components/result/BudgetSummary.vue";
import type { BudgetType, FormDataBudget } from "~/type";

const router = useRouter();
const route = useRoute();
const formData: FormDataBudget = {
  numberOfDays: Number(route.query.numberOfDays),
  numberOfPeople: Number(route.query.numberOfPeople),
  destinationCountry: route.query.destinationCountry as string,
  destinationCity: route.query.destinationCity as string | undefined,
  budget: route.query.budget as BudgetType,
  includeFlight: route.query.includeFlight === "true",
  departureCity: route.query.departureCity as string | undefined,
};

const goToForm = () => {
  router.push({ name: "index" });
};
</script>
