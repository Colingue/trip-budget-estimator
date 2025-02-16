<template>
  <div class="hero">
    <h2 class="title">Estimate your next trip</h2>
    <p class="description">
      Estimate the cost of your trip based on your destination, duration, and
      travel preferences.
    </p>
    <a href="#estimation-form">
      <button class="btn btn-primary">Let's go estimate 👇</button>
    </a>
  </div>
</template>

<script setup></script>

<style lang="scss">
.hero {
  text-align: center;
  padding-top: 40px;
  margin-bottom: 8rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin: 0 2rem 4rem 2rem;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-size: 3.5rem;
    margin: 20px;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  .description {
    font-size: 1.2rem;
    color: #333;
    font-weight: 300;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
</style>
