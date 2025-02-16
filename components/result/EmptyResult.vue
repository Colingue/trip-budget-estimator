<template>
  <div class="empty-result-container">
    <p class="emoji">🏖️</p>

    <p class="title">Choose your preferences</p>
    <p class="description">
      Select your destination, budget, and other travel preferences to calculate
      your trip estimation.
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.empty-result-container {
  text-align: center;
  max-width: 300px;

  margin: 100px auto 0 auto;

  .emoji {
    font-size: 100px;
    margin: auto;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 10px 0;
  }

  .description {
    margin: 0;
    color: #7a7a7a;
  }
}
</style>
