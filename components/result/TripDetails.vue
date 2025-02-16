<template>
  <div class="trip-details">
    <h4>Trip Details</h4>
    <ul class="list">
      <!-- <li>
        <p>Destination:</p>
        <p>
          {{ destination }}
        </p>
      </li>
      <li>
        <p>Number of Travelers:</p>
        <p>
          {{ travelers }}
        </p>
      </li>
      <li>
        <p>Comfort Level:</p>
        <p>
          {{ comfortType }}
        </p>
      </li> -->
      <!-- <li>
        <p>Duration:</p>
        <p>{{ duration }} days ({{ duration - 1 }} nights)</p>
      </li> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  destination: string;
  travelers: number;
  comfortType: string;
  duration: number;
}>();
</script>

<style scoped>
.trip-details {
  margin-top: 20px;

  h3 {
    /* font-size: 1.5rem; */
    margin-bottom: 10px;
  }

  .list {
    padding-inline-start: 0;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      p {
        margin: 0;

        &:last-child {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
