<template>
  <div class="repartition-line">
    <div class="category">
      <p class="emoji">{{ emoji }}</p>
      <p class="title">{{ title }}</p>
    </div>
    <PercentageBar :percentage="percentage" />
    <div class="repartition-numbers">
      <p>{{ percentage }}%</p>
      |
      <p>{{ amount }} €</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import PercentageBar from "../elements/PercentageBar.vue";

export type RepartitionLineProps = {
  title: string;
  amount: number;
  emoji: string;
  percentage: number;
};

defineProps<RepartitionLineProps>();
</script>

<style scoped>
.repartition-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  .category {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;

    p {
      margin: 0;
    }

    .emoji {
      font-size: 1.5rem;
    }

    .title {
      font-size: 0.9rem;
    }
  }

  .repartition-numbers {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    flex: 1;

    & > p:first-child {
      font-weight: 700;
    }
  }
}
</style>
