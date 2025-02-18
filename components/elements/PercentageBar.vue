<template>
  <div class="percentage-bar">
    <div class="bar" :style="{ width: percentage + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
  },
});
</script>

<style lang="scss">
.percentage-bar {
  flex: 3;
  display: flex;
  align-items: center;

  width: 100%;
  height: 0.7rem;
  background-color: #f0f0f0;
  border-radius: 0.7rem;
  position: relative;

  .bar {
    height: 100%;
    background-color: #20cea1;
    border-radius: 0.9rem;
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
