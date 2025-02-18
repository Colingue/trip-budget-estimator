<script setup lang="ts">
import RepartitionLine, {
  type RepartitionLineProps,
} from "./RepartitionLine.vue";

export type RepartitionList = RepartitionLineProps[];

const props = defineProps<{ repartition: RepartitionList }>();

const repartition = computed(() =>
  props.repartition.filter((line) => line.amount > 0)
);
</script>

<template>
  <h3>Répartition du budget</h3>
  <RepartitionLine
    v-for="line in repartition.sort((a, b) => b.amount - a.amount)"
    :key="line.title"
    v-bind="line"
  />
</template>

<style scoped>
h3 {
  margin-bottom: 1rem;
}
</style>
