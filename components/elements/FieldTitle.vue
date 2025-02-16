<template>
  <div class="field-title">
    <EmojiContainer v-if="emoji" :emoji="emoji" />
    <p class="title">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import EmojiContainer from "./EmojiContainer.vue";

defineProps(["emoji", "title"]);
</script>

<style lang="scss">
.field-title {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex: 1;

  .title {
    font-weight: 600;
    margin-left: 1rem;
    font-size: 1.2rem;
  }
}
</style>
