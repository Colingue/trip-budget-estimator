<template>
  <div class="result-detail-card">
    <img class="cover" src="./../../assets/card-exemple.jpg" alt="card" />
    <div>
      <p class="main-title">Your Trip to {{ destination }}</p>
      <p style="margin-bottom: 4px">
        🛫 {{ flightIncluded ? "Flight included" : "Flight not included" }}
      </p>
      <p>
        📅 {{ numberOfDays }}
        {{ numberOfDays && numberOfDays > 1 ? "days" : "day" }}
        - 🧍‍♂️ {{ numberOfPeople }}
        {{ numberOfPeople && numberOfPeople > 1 ? "travelers" : "traveler" }}
        {{}}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  flightIncluded: Boolean,
  destination: String,
  numberOfDays: Number,
  numberOfPeople: Number,
});
</script>

<style lang="scss">
.result-detail-card {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  p {
    margin: 0;
  }

  .main-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 4px;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .cover {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 20px;
  }
}
</style>
