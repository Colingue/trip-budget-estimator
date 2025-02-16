<template>
  <div class="emoji-container">
    <span role="img" aria-label="emoji">{{ emoji }}</span>
  </div>
</template>

<script setup>
defineProps(["emoji"]);
</script>

<style lang="scss">
.emoji-container {
  background-color: #f7f7f7;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.5rem;
  }
}
</style>
